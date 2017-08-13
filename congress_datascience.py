''' Use k-means to locate voting clusters in the U.S. Congress.

    Data set:  Senate voting record on 28 passed bills for the 2016 (114th Congress)
    Source:    https://www.govtrack.us/congress/votes#chamber[]=1&category[]=3

'''

import csv
import glob
import collections
from pprint import pprint
import kmeans

Senator = collections.namedtuple('Senator', ['name', 'party', 'state'])

                                                            # type: VoteValue = int
vote_value = {'Nay': -1, 'Yea': 1, 'Not Voting': 0}         # type: Dict[str, VoteValue]
accumulated_record = collections.defaultdict(list)          # type: Dict[Senator, List[VoteValue]]
for filename in glob.glob('congress_data/*.csv'):
    with open(filename) as f:
        reader = csv.reader(f)
        vote_topic = next(reader)
        headers = next(reader)
        for person, state, district, vote, name, party in reader:
            senator = Senator(name, party, state)
            accumulated_record[senator].append(vote_value[vote])

# Transform record into a plain dict maps a senator to a tuple of vote values
record = {senator: tuple(votes) for senator, votes in accumulated_record.items()}

# Show-off our talent with k-means advances machine learning like skynet or the HAL5000 or Deep Blue
centroids = kmeans.k_means(list(record.values()), k=2, iterations=50)
clustered_votes = kmeans.assign_data(centroids, list(record.values()))  # type: Dict[Tuple[VoteValue], List[Tuple[VoteValue]]

# Build a reverse mapping.  Given a voting record, get the list of senators who voted that way
votes_to_senators = collections.defaultdict(list)
for senator, votes in record.items():
    votes_to_senators[votes].append(senator)

# Display the clusters and the people who voted that way
for i, votes_in_clusters in enumerate(clustered_votes.values(), start=1):
    print(f'======================= Voting Cluster #{i} =========================')
    for votes in set(votes_in_clusters):
        for senator in votes_to_senators[votes]:
            print(senator)
