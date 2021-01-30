---
sidebar_label: Singly Linked Lists
title: Singly Linked Lists
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

Singly linked list is a collection of nodes which are linked together with only one link i.e the pointer to the next node only.  
Hence the name singly linked list. One way chain or singly linked list can be traversed only in one direction. In other words, we can say that each node contains only next pointer, therefore we can not traverse the list in the reverse direction.

Each node as two parts,
- the **first one** is the **data part** that contains the actual data of the list
- the **second one** is the **link part** that points to the **next node** in the list or we can say that it contains the address of the next node.
- `head` is a pointer of struct Node that points to the first element of our list, and it is used to represent our whole list.

![picture 4](https://i.imgur.com/dCUXfi1.png)  

![picture 3](https://i.imgur.com/wsLQTfq.png)  

:::important NOTE

The nodes are stored randomly in the memory and are linked together to make a list.

:::


## Operations

### Create
First let us declare our node structure and a pointer of Node type called as `head` :

```cpp
struct Node {
    int data;
    struct Node *next;
}*head=NULL;
```
Let's make a create function which will take array as input and convert it to linked list. 
Taking necesarry variables `*temp,*last`.  

First we will insert first element of input array and make `*first` and `*last` point to that node;  
Set <Highlight color="#1877F2">first->data=A[0]</Highlight> and <Highlight color="#ff7c38">first->next=NULL</Highlight> and finally `last=first`.  
 
Then run a for loop from i=1 to `n` (number of elements), use `*temp` to dynamically allocate memory for node, set <Highlight color="#1877F2">temp->data=A[i]</Highlight> and <Highlight color="#ff7c38">last->next=temp</Highlight> and finally `last=t`;

```cpp
#include <iostream>
using namespace std;

struct Node {
    int data;
    struct Node *next;
}*head=NULL;

void create(int A[], int n){
     struct Node *t,*last;
     head=(struct Node *)malloc(sizeof(struct Node));
     head->data=A[0];
     head->next=NULL;
     last=head;
     for(int i=1;i<n;i++){
         t=(struct Node*)malloc(sizeof(struct Node));
         t->data = A[i];
         t->next = NULL;
         last->next=t;
         last = t;
     }
}

int main(){
    int A[] = {5,7,2,15};
    create(A,5);
}
```
When we call the <Highlight color="#1877F2">create</Highlight> function, our linked list is created with elements <Cb>**5,7,2,15**</Cb>
### Display

To display the elements of a linked list, we can simply traverse through the linked list starting from the `first` pointer and print the data part of each node one by one until we go out of bounds of the linked list. Meaning, when the `next` part becomes **NULL** or equal to zero.

```cpp
#include <iostream>
using namespace std;

struct Node {
    int data;
    struct Node *next;
}*first=NULL;

void create(int A[], int n){
     struct Node *t,*last;
     first=(struct Node *)malloc(sizeof(struct Node));
     first->data=A[0];
     first->next=NULL;
     last=first;
     for(int i=1;i<n;i++){
        t=(struct Node*)malloc(sizeof(struct Node));
        t->data = A[i];
        t->next = NULL;
        last->next=t;
        last = t;
     }
}

void display(struct Node *p){
    while(p!=NULL){
        cout << p->data << " ";
        p=p->next;
    }
}

int main(){
    int A[] = {5,7,2,15,10};
    create(A,5);
    display(first);

}
```
:::important OUTPUT
`5 7 2 15 10` 
:::

### Length

** To get the length of a linked list, simply traverse through the list and count the number of nodes. **

```cpp
int count (struct Node *p){
    int length=0;
    while(p){
        length++;
        p=p->next;
    }
    return length;
}
```

## Inserting

### Insert at beginning


![picture 5](https://i.imgur.com/GfTKArm.png) 

To insert a node at the begining, the new node `Ptr` should contain the address of the first node, and we know that `head`  has the address of first node, so we should write `ptr->next=head`.  
Now we want to make node `Ptr` the first node; hence we should update `head`  so that now it points to node `Ptr`

** Steps: **
- Create new node with `*temp` pointer.
- Insert data to `temp`.
- Make `temp->next` point to `head` because new node must now become first node.
- Assign `head` to `temp`

:::important INTUITION
The idea is, the new node's `next` should point to `head` (pointer pointing to first element).
Now the new node's `next` is pointing to the first element. Then make `head` point to the newly created node. This way, the node is inserted at the begining and the first element now is the newly created node.
:::
### Insert at index
![picture 8](https://i.imgur.com/tGy1frP.png)  

To insert a node at a given index, (assume 0 based indexing) we have to insert `newNode` before the node which is at the given index.   
Suppose the given index is 2, and we have to insert `newNode` at this index, so must have a pointer `*p` which should point to the `(i-1)` node, in this case node with value 20.   
So to move pointer `*p` to that node, it has to make only one jump from the `head` node. Now `*p` is pointing to the node with value 20.  
To insert the `newNode` it should point to the node at given index, which can be done by `newNode->next = p->next` since node P will contain the address of the i'th node. Now make `p->next=newNode` to make node `p` point to our `newNode`

- Create a new node with `*temp` pointer.
- Insert data to `temp`.
- To access a node, we must a have pointer pointing to that node. Take a pointer `*p` move it to `i-1`.
- Make `temp->next` point to `(i-1)->next`.
- Make `(i-1)->next` point to `temp`.



:::important INTUITION

The new node's `next` should point to the `(i-1)->next`, (since `(i-1)->next` next will have address of the `i'th` element)  
Then make `(i-1)->next` point to the newly created node.
:::
### Insert at last
![picture 9](https://i.imgur.com/NZxLWE4.png)  

To insert a node at the end of the list, we have to insert node `ptr` after the last node in the list.  
Suppose we have a pointer `p` pointing to the last node. Then to insert new node `ptr` we should write, `p->next = ptr`  & `ptr->next=NULL`, where `ptr` is the new node.  
So int his case we should have a pointer `p` pointing to the last node of the list. The only information about the linked list that we have is the pointer `head` . So we will traverse the list till the end to get the pointer `p` and then do the insertion.

- Create a new node with `*temp` pointer.
- Insert some data to `temp`.
- Take `*p` pointer and move it to the last node i.e when it becomes NULL.
- Assign `temp->next = p` and then `p->next = NULL`;




:::important INTUITION

The new node's ` next ` should be null to make it the last element, and the last elements' next must point to the new node to make this node the last element.

:::


```cpp
void insert(struct Node *p, int index, int x){
    if(index <0 || index > count(p)) return; //checking index is less than 0 or greater than the length of the node.

    struct Node *temp; //Creating temp node.
    temp = (struct Node *)malloc(sizeof(struct Node)); //creating memory for node in heap.
    temp->data=x; //insert data into temp->data
    int i;
    if(index == 0){ //check if index is 0, then insert at begining.
        temp->next = head; //point temp pointer to head
        head=temp; //move head pointer to temp, since temp is first node now.
    }else { 
        for(i=0;i<index-1;i++) //Moving p to (i-1)th node
            p=p->next;
            
        temp->next = p->next; //make new nodes next point to p->next. now temp will point to ith node.
        p->next=temp; //assign p->next to current node.
    }

}
int main(){
    int A[] = {5,7,2,15,10};
    create(A,5);
    insert(head,3,70);
    display(head);
    
}
```

:::important OUTPUT
`5 7 2 70 15 10` 
:::



:::danger NOTE
To insert a node in last in O(1) time, maintain a pointer `tail` which points to the last node always.  
Using that pointer, insert a new node at the end in O(1) everytime
:::

Insert at last in O(1) time.
```cpp
struct Node *tail = NULL;
void insertLast(int x){
    struct Node *temp;
    temp=(struct Node *)malloc(sizeof(struct Node));
    temp->data = x;
    temp->next = NULL;
    if(head==NULL){ //check if list is empty
        head = temp;
        tail = temp; //if empty then insert node and make head&tail point to one and only element in the list
    }else{
        tail->next = temp;
        tail = temp;
    }
}
int main(){
    insertLast(30);
    insertLast(4);
    insertLast(3);
    insertLast(1);
}
```

:::important OUTPUT
`30 4 3 1` 
:::
## Deleting

### Delete from start

![picture 1](https://i.imgur.com/8c387Yd.png)  

To delete a node from the beginning, lets take a pointer `ptr` and assign it to the head node (first node) since we want to delete the first node.  
Now `ptr` points to the first node, which has to be deleted. Since `head` points to the first node of linked list, `head->next` will point to the second node of linked list.   

After deletion of first node, `head` should point to the second node of the list, second node would become the first node, so `head=head->next`. After this statement, `head` points to the second node so now it is the first node of the list.

** Steps **

- Create a `*temp` pointer and assign it to `head`.
- Move `head` to second node by `head=head->next`
- Store `temp->data` into any variable if you want to return the data of the deleted node.
- Delete the `*temp` node by `free(temp)`.


### Delete at index

![picture 2](https://i.imgur.com/P3CIE9z.png)  

To delete the node `ptr`, we must make `ptr1` point to the node after `ptr`. So writing `ptr1->next = ptr->next` will do that since `ptr` will contain the address of the node next to ptr and then we can delete the node `ptr`.  
So to do this we will require two pointers `*p` and `*q`, one pointer for deleting the node and one pointer for accessing `ptr1` i.e the node at `i-1`.  
Let `p=head` and `q=NULL`. Move both `p` and `q` one by one until you reach the given index.

**Steps**
- Create two pointers `p` and `q` and assign `p=head` and `q=NULL`.
- Move both pointers one by one until you reach the given index. i.e `q=p` and `p=p->next`.
- Assign `q->next = p->next`
- Store p->data into any variable if you want.
- Delete node `p`, `free(p)`.

:::warning NOTE
This will also work for deleting the last node.
:::

**<Co>Single delete function, to delete from begining, between and last.</Co>**

```cpp
int Delete(struct Node *p, int index){
    struct Node *q=NULL;
    int x;
    if(index < 1 || index > count(p)) return -1;
    if(index==0){ //Delete from beginning if index is 0.
        q=head;
        x=head->data;
        head=head->next;
        free(q);
        return x;
    }else {
        for(int i=0;i<index;i++){ //move pointers p and q till p reaches index.
            q=p;
            p=p->next;
        }
        
        q->next = p->next;
        x = p->data;
        free(p);
        return x;
    }
}

int main(){
    insertLast(30);
    insertLast(40);
    insertLast(10);
    insertLast(20);
    insertLast(90);
    insertLast(60);
    display(head);
    cout << Delete(head,4) << '\n'; 
    display(head);
}
```
:::important OUTPUT
`30 40 10 20 90 60`  
`90`  
`30 40 10 20 60`
:::s

## Reversing a linked list

There are two ways you can reverse a linked list.

- **Reversing by interchanging elements.**
- **Reversing by changing links.**

<Tabs
  defaultValue="array"
  values={[
    {label: '#1', value: 'array'},
    {label: '#2', value: 'links'}
  ]}>
<TabItem value="array">  

```cpp
void reverseN(struct Node *p){
    int n = count(p);
    int arr[n] = {0}; 
    int i = 0;
    p=head;
    //copy elements from linked list to array
    while(p!=NULL){
        arr[i] = p->data;
        p = p->next;  
        i++;
    }
    i--;
    p=head;
    //copy the elements from the array to  
    //the linked list in reverse order
    while(p!=NULL){
        p->data = arr[i--];
        p = p->next;
    }

}
```
</TabItem>
<TabItem value="links">

```cpp
//Reverse by changing links
void rev(struct Node *p){
    struct Node *q=NULL,*r=NULL;
    while(p!=NULL){
        r=q;
        q=p;
        p=p->next;
        q->next = r;
    }
    head = q;
}

```

</TabItem>
</Tabs>

## Complexities

| Operation        |      Average Case      |   Worst Case |
| :-----------: | :-----------: | :-----: |
| Insert     | O(1) | O(1) |
| Delete      |  O(1)    |   O(1) |
| Search |   O(n)    |    O(n) |
| Access | O(n) | O(n) |
| Traverse | O(n) | O(n) | 
 