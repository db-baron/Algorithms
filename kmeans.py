# Implement K-means clustering using defaultdict.
# https://www.datascience.com/blog/introduction-to-k-means-clustering-algorithm-learn-data-science-tutorials'

from pprint import pprint
from math import fsum, sqrt
from collections import defaultdict
from functools import partial
from random import sample

def dist(p, q):
    # Find the distance bewteen points
    return sqrt(fsum((x1 - x2) ** 2 for x1, x2 in zip(p, q)))


def mean(data):
    # Accurate arithmetic mean
    data = list(data)
    return fsum(data)/len(data)

def transpose(matrix):
    # Swap rows with columns
    return zip(*matrix)

### Testing
# print(list(transpose([[10,20,30],[40,50,60]])))


def assign_data(centroids, points)``:
    # Assign each point to closest centroid
    d = defaultdict(list) # defaultdict on list creates an empty list
    for point in points:
        # for centroid in centroids:
        #      print (point, centroid)
        # we want the smallest centroid distance
        centroid = min(centroids, key=partial(dist, point))
        # alternate way
        # centroid = (min(centroids, key=lambda centroid: dist(centroid, point)))
        print(points, " is closest to ", centroid)
        d[centroid].append(point)
    return dict(d) # We don't want the default dict behavior anymore. dict(d) rebuilds and entire new dictionary

def compute_centroids(groups):
    # Return a new centroid for each group of points
      # Maps the mean function to the column data of groups, so takes the means of all x's, all y's, all z's
    return [tuple(map(mean, transpose(group))) for group in groups]

# Testing
# my_groups = [[(11, 42, 5), (20, 32, 4), (12, 40, 12)], [(10, 41, 23), (22, 30, 29), (21, 36, 23)]]
# print(compute_centroids(my_groups))

my_points = [
(10, 41, 23),
(22, 30, 29),
(11, 42, 5),
(20, 32, 4),
(12, 40, 12),
(21, 36, 23)
]

# k is the number of groups you want to have. 10 iterations is usually good
def k_means(data, k=2, iterations = 10):
    centroids = sample(data, k)
    for i in range(iterations):
        # Each data point is assigned to a single cluster
        labeled = assign_data(centroids, data)
        centroids = compute_centroids(labeled.values())
    return centroids

centroids = k_means(my_points, k=2)
labeled = assign_data(centroids, my_points)
pprint(labeled, width=120)

centroids = k_means(my_points, k=3)
labeled = assign_data(centroids, my_points)
pprint(labeled, width=120)
