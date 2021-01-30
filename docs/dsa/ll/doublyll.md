---
sidebar_label: Doubly Linked List
title: Doubly Linked List
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

Doubly linked list is a linked list in which a node contains a pointer to the pevious as well as the next node. It is also called as two way list.

![picture 2](https://i.imgur.com/4oWFVop.png)  


## Node Structure
![picture 1](https://i.imgur.com/0M6SjbR.png)  
```cpp
struct Node{
    struct Node *prev;
    int data;
    struct Node *next;
};
```

## Operations
### Create

```cpp
void create(int arr[], int n){
    struct Node *temp,*last;
    //Create first node
    head = (struct Node *)malloc(sizeof(struct Node));
    head->prev=head->next = NULL;
    head->data = arr[0];
    last = head;
    for(int i=1;i<n;i++){
        temp = (struct Node *)malloc(sizeof(struct Node));
        temp->data = arr[i];
        temp->next = last->next;
        temp->prev = last;
        last->next = temp;
        last = temp;
    }
}
```

### Display
```cpp
void display(struct Node *p){
    while(p!=NULL){
        cout << p->data << " ";
        p=p->next;
    }
    cout << '\n';
}
```

### Insert

- Insert at beginning
- Insert at given index

```cpp
void insert(struct Node *p, int index, int x){
    struct Node *temp;
    temp = (struct Node *)malloc(sizeof(struct Node));
    temp->data = x;
    if(index == 0){ //Insert at beginning
        temp->next = head;
        temp->prev = NULL;
        head->prev = temp;
        head = temp;
    }else {

        //Insert at given index
        for(int i=0;i<index-1;i++){
            p=p->next;
        }
        temp->next = p->next;
        temp->prev = p;
        if(p->next) p->next->prev = temp;
        p->next = temp;

    }
}
```
### Delete 

- Delete first node
- Delete at given index.

```cpp
int del(struct Node *p,int index){
    if(index == 0){ //delete first node
        head = head->next;
        int x = p->data;
        free(p);
        if(head) head->prev = NULL;
        return x;
    }else { //delete at given index
        for(int i=0;i<index;i++){
                p=p->next;
        }
        p->prev->next = p->next;
        //check if p->next exists or null
        if(p->next) p->next->prev = p->prev;
        int x = p->data;
        free(p);
        return x;
    }
    return -1;
}
```

## Reversing the list.

```cpp
void rev(struct Node *p){
    struct Node *temp;
    while(p){
        temp = p->next;
        p->next = p->prev;
        p->prev = temp;
        p=p->prev;
        if(p!=NULL && p->next==NULL)
            head = p;
    }
}
```

## Circular Doubly Linked List
