---
sidebar_label: Arrays
title: Arrays
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


## Linear Search

> **Traverse through the array and find the key element.**

<Tabs
  defaultValue="iterative"
  values={[
    { label: 'Iterative', value: 'iterative', },
    { label: 'Recursive', value: 'recursive', },
 
  ]
}>
<TabItem value="iterative">

```cpp
int N=5,a[N] = {4,5,1,2,3};
int key = 2;
for(int i = 0; i < N; i++) {
  if(a[i]==key) return i;
}
```

</TabItem>


<TabItem value="recursive">

```cpp
int linear_search(int a[], int size, int key){
    if(size==0)//stop if array size becomes 0;
        return -1;
    if(a[0] == key) return 0; //checking if a[0] is key.
    int index = linear_search(a+1,size-1,key); //call function again for rest of the array (a+1);
    if(index==-1) return -1; //return -1 if not present in array
    else return index+1; //for recursion the element found 
                        //at 2 is 1, so need to increment by 1
}
```

</TabItem>

</Tabs>




## Binary Search

:::important 
Array must be sorted for this to work
:::

<Tabs
  defaultValue="iterative"
  values={[
    { label: 'Iterative', value: 'iterative', },
    { label: 'Recursive', value: 'recursive', },
 
  ]
}>
<TabItem value="iterative">

```cpp
int low=0;
int high = n-1;
while(low<=high){
    int mid = (low+high)/2;
    if(a[mid] == key)
        return mid;
    else if(key<a[mid])
        high=mid-1;
    else
        low=mid+1;
}
```
</TabItem>
</Tabs>

## **Max Subarray Sum**

** What is a subarray? ** 
- Subarray is a **continguous** part of an array. An array that is inside another array and is continguous.  
- For an array of size n, there are `n*(n+1)/2` non-empty subarrays

**Generate all possible subarrays**
```cpp
for(int i = 0; i < n; i++) {
    for(int j = i; j < n; j++) {
        for(int k = i; k <= j; k++) {
            cout << a[k] << ",";
        }
        cout << '\n';
    }
}
//O(n^3)
```
---

** Maximum Subarray Sum (Naive Method)**

- Simply generate all subarrays and `currentSum` variable and compare it with `maxSum` variable.

```cpp
int currentSum = 0;
int maxSum = 0;
for(int i = 0; i < n; i++) {
    for(int j = i; j < n; j++) {
        currentSum = 0;
        for(int k = i; k <= j; k++) {
            currentSum += a[k];
        }
        if(currentSum > maxSum)
            maxSum = currentSum;
    }
} //O(n^3) , pretty bad.
```
### Prefix Sum Method

- We maintain another array of prefix sum or cumulative sum

- To get the subarray sum till `j` we simply do `currentSum = prefixSum[j] - prefixSum[i-1];`

```cpp
int a[n];
int prefixSum[n];
cin >> a[0];
prefixSum[0] = a[0]; //take first input separately bcz
          //to do i-1 there must be a previous element.
for(int i = 1; i < n; i++) {
    cin >> a[i];
    prefixSum[i] = prefixSum[i-1] + a[i]; 
    // Current Prefix Sum is previous 
    // element + current element,
    // since previous element will get me the sum of 
    // array till i-1 and we are simply adding a[i] to it.
}
int currentSum = 0;
int maxSum = 0;
for(int i = 0; i < n; i++) {
    for(int j = i; j < n; j++) {
        currentSum = 0;
        currentSum = prefixSum[j] - prefixSum[i-1];
        if(currentSum > maxSum)
            maxSum = currentSum;
    }
}
cout << maxSum; 
//O(n^2)
```
### Kadane's Algorithm

- Idea is to look for all positive contiguous sum of the array, if at any point `currentSum` becomes negative, reset the `currentSum` to 0.
- And keep track of maximum sum among all positive subarray sum.

```cpp
//Kadane's Algorithm
int currentSum = 0;
int maxSum = 0;
for(int i = 0; i < n; i++) {
    currentSum += a[i];
    if(currentSum > maxSum)
        maxSum = currentSum; //update max sum
    //Reset Current Sum if it becomes less than 0
    if(currentSum < 0)
        currentSum = 0;
}
```

## **Pair Sum Equal to K**

### Binary search method

- For each `a[i]`, we need a number equal to `K-a[i]` to make sum equal to `K`.
- Search for this number using binary search for each `a[i]`.
- Will only work if array is sorted.
- Complexity: `O(NlogN)`

```cpp
for(int i = 0; i < n; i++) {
    int req = k-a[i];
    int posreq = binsearch(a,n,req);
    if(posreq!=-1){
        if(a[posreq]+a[i]==k){
            cout << a[i] << space << a[posreq] << nl;
            break;
        }
    }  
} //O(nlogn)
```
### Two pointer approach

- Take two pointers at the start and `n-1`.
- Check if `a[i]+a[j]` is equal to `K`. If it is K, then we are done.
- If the `a[i]+a[j]` is less than `K`, so we need to increment `i` to get the next larger element to increase the sum because the array is sorted in increasing order.
- Similarly, if the sum is greater, we need to decrement `j` by one.
- If at any point `i` becomes greater than `j`, break the loop.
- Complexity: **`O(N)`**
```cpp
int i=0;
int j=n-1;
while(i<j){
    if(a[i]+a[j]==k){
        cout << a[i] << space << a[j];
        i++;
        j--;
    }else if(a[i]+a[j] < k) 
              i++;
     else 
        j--;
} //O(N)
```

### Hashing

To do...



