---
sidebar_label: Introduction
title: Data Structures
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
 


## 👋 Introduction

Data Structure is a way of collecting and organizing data in such a way that we can
perform operations on these data in an effective way.

Data Structure can be defined as the group of data elements which provides an
efficient way of storing and organizing data in the computer so that it can be used
efficiently. It is a programming construct used to implement an ADT.

## 🗒️ Types of Data Structures
 

- **<C color="#892cdc">Primitive data structures </C>** 
- **<C color="#892cdc">Non-Primitive data structures</C>**

**Primitive Data structure:** The primitive data structures are primitive data types.
The int, char, float, double, and pointer are the primitive data structures that can
hold a single value.

**The non-primitive data structure** is divided into two types:

- Linear data structure
- Non-linear data structure

**Linear data structures:** A data structures is linear if all the elements are arranged in
a sequential manner. The data structures used for this purpose are Arrays, Linked
list, Stacks, and Queues. In these data structures, one element is connected to only
one another element in a linear form.

**Non-linear data structures:** In a non-linear data structure, there is no linear order
in the arrangement of the elements. Ex: trees and graphs.

**Data structures can also be classified as:**

- **Static data structure:** It is a type of data structure where the
    size/memory is allocated at the compile time. Therefore, the maximum
    size is fixed and cannot be changed at run time. It allows fast access to
    elements but insertion and deletion is expensive. Ex: Arrays
- **Dynamic data structure:** It is a type of data structure where the
    size/memory is allocated at the run time. Therefore, the maximum size is
    flexible. It allows fast insertion and deletion of elements but access is
    slow. Ex: Linked Lists.

![](https://static.javatpoint.com/ds/images/ds-introduction.png)

## 📌 Abstract Data Type
Abstract data type is a mathematical model or concept that defines a data type
logically. It specifies a set of data and collection of operations that can be
performed on that data. ADT only mentions what operations are to be performed
but now how these operations will be implemented. It is called **abstract** because it
gives an implementation independent view. The process of providing only the
essentials and hiding the details is known as abstraction.

**Example:**
 
<Tabs
  defaultValue="apple"
  values={[
    {label: 'List ADT', value: 'apple'},
    {label: 'Stack ADT', value: 'stack'}
  ]}>
  <TabItem value="apple">
A list contains elements of same type arranged in sequential order and following
operations can be performed on the list.  

**Initialize() -**   Initialize the list to be empty.  
**get() -** Return an element from the list at any given position.  
**insert() –** Insert a new element at any position of the list.  
**remove() –** Remove the first occurrence of any element from a non-empty list.  
**replace() –** Replace an element at any position by another element.  
**size() –** Return the number of elements in the list.  
**isEmpty() –** Return true if the list empty, else return false.  
**isFull() –** Return true if the list is full, else return false.
  </TabItem>
</Tabs>




## 🖥️ Operations on Data Structures.

We can perform various operations on data structures:

**Insertion:** Insert operation is to insert one or more data elements into the structure.

**Deletion:** Deletion refers to removing an existing element or item from the data
structure

**Traversal:** It simply means to access each data item exactly once so that it can be
accessed.(looping through the data structure)

**Searching:** Perform a search operation for the item if it exists in a given collection
or not.

**Sorting:** Sort the given data structure in ascending or descending order.

**Access:** Accessing the data in the data structure.

## 📜 Few basic list of data structures.

- **Arrays**
- **Stacks**
- **Queues**
- **Linked Lists**
- **Trees**
- **Tries**
- **Graphs**
- **Hash Tables**


