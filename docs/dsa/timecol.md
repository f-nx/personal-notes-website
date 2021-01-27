---
sidebar_label: Time Complexity
title: Time and Space Complexity
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const C = ({children, color}) => ( <span style={{
      color: color,
    }}>{children}</span> );

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );


## Big O Notation

**<C color="#1877F2">What is Big O Notation?</C>**

**<C color="#60d394">Big O Notation</C>** is used to indicate the efficiency of a certain algorithm or a function
with respect to time & space(memory). It is the language we use for talking about
how long an algorithm takes to run for certain ‘n’ input value. Big O is used to find
the time & space complexity of a function/algorithm.

We use Big O notation to describe the time complexity of a given algorithm i,e how
fast a function/algorithm is growing with respect to the given input. We consider
only large values of **n** (input) and small input values are discarded because they are
insignificant w.r.t **n** and do not contribute to the time complexity.

**<C color="#892cdc">So, what is Big O Notation? In simple terms:</C>**

- It is the relative representation of the complexity of an algorithm.
- It describes how an algorithm performs and scales.
- It describes the upper bound of the growth rate of a function and could be
    thought of the _worst case scenario_.

Below is comparison of few common time complexities where _n_ is the number of
elements that the function is receiving as inputs.
For example: O(n) So, this example is saying that for _n_ inputs, its complexity is equal
to **n.**


![picture 1](https://i.imgur.com/NJOcPiL.png)  
![picture 2](https://i.imgur.com/9IqDM5b.png)  


## Common complexities
**O(1):**  
It is the best possible complexity an algorithm or a function can have. It means that
all the operations are performed in Big O of 1 time or in constant time irrespective of
the input | **Constant** - no loops

**O(n):**  
This notation means the time taken by a function is in linear relation (or in
proportion) to the size of the input **n** (or number of items). O(n) represents the
complexity of a function that increases linearly and in direct proportion to the
number of inputs. | **Linear -** for loops, while loops through n items

**O(logn):**  
This is the case where a set of data is repeatedly divided into half and the middle
element is processed. | **Logarithmic –** searching algorithms have logN if they are
sorted

**O(nlogn):**  
This is the case where a set of data is repeatedly divided into half and each half is
processed independently **| Linear Logarithmic –** usually sorting operations.

**O(n^2):**  
This is the case when full set of data has to be traversed for each element of the set
or we can say that all pairs of data items are processed. (Bubble Sort). | **Quadratic
Time -** every element in a collection needs to be compared to ever other element,
two nested loops

**O(n^3):**  
This is the case when all triplets of data items are processed | **Three Nested Loops**

** O(2^n):**   
This is the case when all possible subsets of a set of data are generated. |
**Exponential** - recursive algorithms that solves a problem of size N.

**O(n!):**  
Case when all possible permutations of a set of data are generated.
**Factorial** - you are adding a loop for every element

:::tip NOTE

**Iterating through half a collection is still `O(n)` and for two separate collections: `O(a * b)`**

:::


## What can cause time in a function?

**<C color="#5e60ce">Operations</C>** (+, -, *, /)  
**<C color="#5e60ce">Comparisons</C>** (<, >, ==)  
**<C color="#5e60ce">Looping</C>** (for, while)  
**<C color="#5e60ce">Outside Function call</C>** (function())  

## Rule Book for calculating Big O

**Rule 1:** Always consider worst Case  
**Rule 2:** Remove all the Constants  
**Rule 3:** Different inputs should have different variables. `O(a+b)`. A and B arrays
nested would be
`O(a*b)`  
**+** for **for loops** in order.  
***** for **nested for loops  
Rule 4:** Drop the non-dominant terms  

## Big O Notations for some common data structures

![picture 3](https://i.imgur.com/Hg8aIDF.png)  



