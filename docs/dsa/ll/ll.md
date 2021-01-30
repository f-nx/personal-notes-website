---
sidebar_label: Linked Lists
title: Linked Lists
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

## 👋 Introduction

Linked list is a common data structure which can be defined as <Highlight color="#1877F2">collection or chain of nodes</Highlight> in which each node contains a some data and a <Highlight color="#892cdc"> pointer</Highlight> to the next node in the chain.

The <Highlight color="#892cdc"> head pointer</Highlight> points to the first node, and the last element of the list points to `null`;


![picture 3](https://i.imgur.com/wsLQTfq.png)  


## Node Structure

The node structure of a linked list mainly consists of two parts
- Data part
- Pointer to the next node.  

**<Co>Node Structure</Co>**
```cpp
struct Node{
    int data; //can be any data type
    struct Node *next;
};
```

Here you can see that the above structure is having integer data part and pointer (of type struct Node) to the next node. It is having a pointer of its own type. Such a structure is also called as <Highlight color="#1877F2"> self-referential </Highlight>structure.

The elements are linked to each other through links (address of next element). 
The variable `next` stores the address of the next element is known as a pointer to the next node.

:::tip NOTE

Linked lists can dynamically increase/decrease in size during run time

:::

## Types of Linked Lists

- **Singly Linked List** (Uni-directional) 
- **Doubly Linked Lists** (Bi-directional)
- **Circular Linked List**
- **Doubly Circular Linked List **

## Basic Operations

- **Insertion** - Inserting an element at beginning/end/middle    
- **Deletion** - Delete an element in the linked list.  
- **Display** - Display the elements of linked list.  
- **Search** -  Search for an element in the linked list using given key.+

## ❓ Why use linked lists?

** Why use linked lists over arrays ❓ **  
 
Arrays have several disadvantages.   

⛔ The size of the array must be known in advanced before using it in the program.  
⛔ Increasing the size of the array is a time taking process. It is almost impossible to expand the size of the array at run time.  
⛔ All the elements in the array need to be contiguously stored in the memory. Inserting any element in the array needs shifting of all its predecessors.

Whereas, linked lists is a data structure which can overcome all the limitations of an array.

✅ Linked lists are dynamic, it allocates the memory dynamically when required.  
✅ Insertion/deletion operations can be easily implemented.  
✅ We do not need to define the size at the time of declaration. List can grow as per the program's demand and are only limited to available memory space.

## Disadvantages of Linked Lists.

❌ No element can be accessed randomly; it has to access each node sequentially.  
❌ Reverse Traversing is difficult in linked list.

 



