# Use K-means clustering to find groups of congressmen that vote in similar ways
'''
Data set:  Senate voting record on 28 passed bills for the 2016 (114th) Congress
Source:    https://www.govtrack.us/congress/votes#chamber[]=1&category[]=3
'''

# Goal is dictionary where the key is and the val is the way people voted
# We'll use ETL (Extract, Transform, Load) to transpose the csv data's rows and columns

from collections import Counter
import collections
import glob
import csv
from pprint import pprint
import kmeans
# {person : centroid(person) for person in people}

# Practicing Counter
# c = Counter('abbaccbabaa')
# print(c.most_common())
# [('a', 5), ('b', 4), ('c', 2)]

Senator = collections.namedtuple('Senator', ['name', 'party', 'state'])
                                                     # type: VoteValue = int
vote_value = {'Nay':-1, 'Yea':1, 'Not Voting':0}     # type: Dict[str, VoteValue]
accumulated_record = collections.defaultdict(list)   # type: Dict[Senator: List[VoteValue]]
for filename in glob.glob('/Users/Megatron/Downloads/congress_data/*.csv'):
    print(filename)
    with open(filename) as f:
        reader = csv.reader(f)
        # First line of data is vote
        vote_topic = next(reader)
        # Second line of data is header info
        headers = next(reader)
        for person, state, district, vote, name, party in reader:
            # print(f'{name} --> {vote}')
            senator = Senator(name, party, state)
            print(senator, '-->', vote_value[vote])
            accumulated_record[senator].append(vote_value[vote])

# Transform record into a plain dict that maps a senator to a tuple of vote values
record = {senator: tuple(votes) for senator, votes in accumulated_record.items()}

# Show off our talent with k_means and machine learning. k=2 to idicate two parties.
# Iterations is 50, you need more for binary, yes/no type studies, you can make due with just 10 iterations for analysis involving distance.
centroids = kmeans.k_means(list(record.values()), k=2, iterations=50)
clustered_votes = kmeans.assign_data(centroids, list(record.values()))  # type: Dict[Tuple[VoteValue], List[Tuple[VoteValue]]
