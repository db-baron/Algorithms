# Given an array of integers arr, find how many sub-arrays can be constructed from arr
# [1,2,3] would have the sub-arrays [1],[2],[3],[1,2],[2,3],[1,2,3]
# Then, given an integer k, determine the longest sub-array has an length <= k

def sublists(arr, k):
    output= []
    if k > 0:
        for i in range(0, len(arr)):
            sub = arr[0:i] + arr[i+1:]
            output += [sub]
            # output.extend(sublists(sub, k-1))
        # print sub
        # max = len(sub[0])
        # for x in sub:
        #     if len(x) > max
        #     max = x
        # return max
    return output

print sublists([1,2,3,4],2)
