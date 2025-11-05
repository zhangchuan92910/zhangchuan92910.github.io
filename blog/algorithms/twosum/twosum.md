# Two Sum: A Classic Solution

**Date:** November 04, 2025
**Category:** Algorithms

This is a classic introductory problem for hash maps.

### The Problem

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the *same* element twice.

### The Naive Solution (O(n^2))

The most straightforward way is to use a nested loop.

This works, but it's slow. For every element, we scan the rest of the array.

```python
def find_two_sum_naive(nums, target):
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []
```

### The Hash Map Solution (O(n))

We can do much better. While we iterate through the array, we can store the elements we've already seen in a hash map (or dictionary in Python).

For each element `num`, we calculate its `complement` (the other number we need to find: `target - num`).

1.  If the `complement` is already in our map, we found our pair!
2.  If not, we add the current `num` and its index to the map.

This is much faster, as lookups and insertions in a hash map are (on average) O(1). We only need to pass through the array once.

```python
def find_two_sum_hashmap(nums, target):
    seen = {} # {value: index}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []
```