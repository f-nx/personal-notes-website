---
sidebar_label: Queue
title: Queue
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


## 👋 Introduction

Queue is a linear data structure that follows the **First in First Out** principle, i.e the first element that is added to the queue is the first one to be removed.

Queue enables insert operatons to be performed at one end called `REAR` and delete operations to be performed at another end called `FRONT`.

## Queue Structure

To create a queue, we require `front` and `rear pointers, `size` of the queue and a `*pointer` variable to allocate memory for our array in the heap.

```cpp
struct queue{
  int size;
  int front;
  int rear;
  int *q;
};
```


![picture 1](https://i.imgur.com/imJqQD9.png)  


## Basic Operations

- **`enqueue()`** - add an element to the queue.

- **`dequeue()`** - remove (access ) an item from the queue.

- **`isEmpty()`** - check if queue is empty

- **`isFull()`** - check if queue is full.

## Features

- Like Stack, Queue is also an ordered list of elements of similar data types.
- Queue is a FIFO Structure.
- Once a new element is inserted in the queue, all the elements inserted before the new element in the queue must be removed, to remove the new element.
- `peek()` function is oftenly used to return the value of the first element without dequeuing it.

## Types of Queues.

- **Linear Queue**
- **Circular Queue**
- **Priority Queue**
- **Deque**

## Implementation

- Array implementation of queue.
- Linked list representation of queue.

<Tabs
  defaultValue="array"
  values={[
    {label: 'Array', value: 'array'},
    {label: 'Linked List', value: 'linkedlist'}
  ]}>
<TabItem value="array">

```cpp
#include <iostream>
using namespace std;

struct queue{
  int size;
  int front;
  int rear;
  int *q;
};
void create(struct queue *s,int size){
  s->front = s->rear = -1;
  s->size = size;
  s->q = (int *)malloc(s->size*sizeof(int));
}
void enqueue(struct queue *s, int x){
  if(s->rear==s->size-1) cout << "Queue is full";
  else {
    s->rear++;
    s->q[s->rear] = x;
  }
}
int dequeue(struct queue *s){
  int x = -1;
  if(s->front==s->rear) cout << "Queue is empty";
  else {
    s->front++;
    x = s->q[s->front];
  }
  return x;
}
void display(struct queue s){
  for(int i=s.front+1;i<=s.rear;i++){
    cout << s.q[i] << " ";
  }
  cout << '\n';
}
int main(){
  struct queue s;
  create(&s,10);
  enqueue(&s,10);
  enqueue(&s,20);
  enqueue(&s,30);
  enqueue(&s,40);
  enqueue(&s,50);
  display(s);
  dequeue(&s);
  display(s);
}
```
:::important OUTPUT
`10 20 30 40 50`  
`20 30 40 50`
:::important

</TabItem>
</Tabs>

## Application

- Serving requests on a single shared resource, like a printer, CPU task scheduling etc.  
- In real life scenario, Call Center phone systems uses Queues to hold people calling them in an order, until a service representative is free.  
- Handling of interrupts in real-time systems. The interrupts are handled in the same order as they arrive i.e First come first served.  