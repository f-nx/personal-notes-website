---
sidebar_label: Circular Linked List
title: Circular Linked List
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

In circular singly linked list, the last node of the list contains a pointer to the first node of the list to make it circular.
It is very similar to singly linked list, just that here the last node is pointing to the first node to make it circular.

## Operations

### Create

```cpp
void create(int arr[], int n){
    struct Node *temp,*last;
    //create a node and assign head, last to temp.
    temp = (struct Node*)malloc(sizeof(struct Node));
    temp->data = arr[0];
    temp->next = temp; //this node will point to itself to make it circular
    head = last = temp;
    for(int i=1;i<n;i++){
        //create nodes for rest of the elements in the array
        temp = (struct Node*)malloc(sizeof(struct Node));
        temp->data = arr[i];
        temp->next = last->next; //since last->next will have address of the first node.
        last->next = temp; //make last->next point to temp.
        last = temp; //move last to temp.
    }   
}
```

### Display

Traverse through the linked list until you reach the first node again and print the elements one by one.
If you use `while(p!=head)`, the control will not enter the while loop at all because at beginning `p` is already equal to `head`. So we must use do while loop for this one.


```cpp
void display(struct Node *p){
    do{
        cout << p->data << " ";
        p = p->next;
    } while(p!=head);
    cout << '\n';
}
```

### Inserting

Inserting in a circular linked list is similar to singly linked list.

- Insert at begining
- Insert at given index.

```cpp
void insert(struct Node*p,int index, int x){
    struct Node *t;
    t = (struct Node *)malloc(sizeof(struct Node));
    t->data = x;
    if(index == 0){ //Insert at 0th index
        if(head==NULL){ //If list is empty
            head = t;
            head->next = head;
        }else {
            while(p->next!=head){
                 p=p->next;
            }
            p->next = t;
            t->next = head;
        }
    }else { //inserting at given index
        for(int i=0;i<index-1;i++){
            p=p->next;
        }
        t->next = p->next;
        p->next = t;
    }
}   
```

### Deleting

Deleting is also similar to singly linked list. There are two cases.
- Deleting head node, then we must make another node as head node
- Deleting node at given index.

```cpp
int del(struct Node *p, int index){
    if(index == 0){ //deleting head node
        while(p->next!=head){
            p=p->next;
        }        
        int x = head->data;
        if(p==head){ //if there is only one node in  the list
            free(head);
            head = NULL;
        }else {
            p->next=head->next; 
            free(head);
            head = p->next;
            return x;
        }       
    }else {
        for(int i=0;i<index-1;i++){ //deleting node at given index
            p=p->next;
        }
        struct Node *q = p->next;
        p->next = q->next;
        int x = q->data;
        free(q);
        return x;
    }
}
```