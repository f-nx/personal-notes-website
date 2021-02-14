---
sidebar_label: Sorting
title: Sorting Algorithms
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
 

export const C= ({children,color}) => ( <span style={{
      color: color,
    }}>{children}</span> );

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '6px',
      color: '#fff',
      padding: '0.2rem 0.4rem',
      
    }}>{children}</span> );

export const Hg = ({children}) => ( <span style={{
      backgroundColor: '#f9f2f4',
      borderRadius: '6px',
      color: '#cb3d67',
      padding: '0.2rem 0.4rem',
      
    }}>{children}</span> );

export const Cg = ({children}) => ( <span style={{
      color: "#60d394",
    }}>{children}</span> );

export const Cp = ({children}) => ( <span style={{
      color: "#892cdc",
    }}>{children}</span> );

export const Co = ({children}) => ( <span style={{
      color: "#ff7c38",
    }}>{children}</span> );

export const Cb = ({children}) => ( <span style={{
      color: "#1877F2",
    }}>{children}</span> );


## Selection Sort

Sort the array by finding the minimum element from the unsorted part and putting it at the beginning. It maintains two subarrays in the given array.

- The subarray which is already sorted.
- Remaining subarray which is unsorted.

In every iteration, the minimum element is selected from the unsorted arary and is moved to the end of the sorted subarray.

```cpp
int minIndex;
for(int i = 0; i < n-1; i++) {
    //Index for the minimum element.
    minIndex = i;
    //Find minimum element in the array.
    for(int j = i+1; j < n; j++) {
        if(A[j] < A[minIndex])
            minIndex = j;
    }
    //Swap the minimum element with i, i.e at the end of the sorted array.
    swap(A[minIndex],A[i]);   
}
```
** Complexity ** 
To find the minimum element from the array of `N` elements,`N-1`   comparisons are required. After putting the minimum element in its proper position, the size of an unsorted array reduces to `N-1` and then `N-2` comparisons are required to find the minimum in the unsorted array.

Total iterations = (N – 1) + (N – 2) + . . . + 1 = (N* (N – 1)) / 2 = (N^2 – N) / 2  

| Time Complexity | `O(N^2)` | 
|-----------------|:--------:|
|**Space Complexity**| **`O(1)`** | 
|**In Place** | Yes | 

## Bubble Sort

- Compare adjacent elements and swap their positions if they are not in intended order.

- Use only if:
    1. Complexity does not matter
    2. A short and simple code is preferred.

```cpp
bool isSorted;
for(int i = 0; i < n; i++) {
    isSorted = true;
    //next largest element is put at the end, so need to checkthat again.
    for(int j = 0; j < n-i-1; j++) {
        if(A[j] > A[j+1]) {
            swap(A[j],A[j+1]);
            isSorted = false;
        }
    }
    //no swap was performed, it means array is already sorted sono need to do more iterations.
    if(isSorted)
        break;
}
```

**Complexity**

- Best Case: `O(N)` that is when the array is already sorted.
- Average Case: `O(N^2)`;

| Time Complexity | `O(N^2)` | 
|-----------------|:--------:|
|**Space Complexity**| **`O(1)`** | 
|**In Place** | Yes | 


## Insertion Sort
- Iterate from A[1] to A[N] over the array.
- Compare the key element to its predecessor.
- If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.

```cpp
for(int i = 1; i < n; i++) {
    key = A[i];
    int j = i-1;
    while(j>=0 and A[j] > key) {
        A[j+1] = A[j];
        j--;
    }
    A[j+1] = key;
}
```
**Complexity**

Best Case: `O(N)` - When array is already sorted.
Average Case: `O(N^2)`

| Time Complexity | `O(N^2)` | 
|-----------------|:--------:|
|**Space Complexity**| **`O(1)`** | 
|**In Place** | Yes | 
|**Paradigm** | Incremental Approach | 
|**Stable** | Yes | 

- Use when number of elements is small, or only few elements need to sorted in the array.

- **To do:** Can be optimised by using binary search to reduce the number of comparions to find the proper location to insert the selected element at each iteration. Still be O(N^2) because of series of swaps required for each insertion.
