---
sidebar_label: Stack
title: Stack
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


Stack is a linear data structure that follows the LIFO (Last-In-First-Out) principle. Stack has only one end to insert/delete the elements.

The element which was inserted last, will get removed first.

![picture 1](https://i.imgur.com/Wlb8pwX.png) 

## Stack structure

To create a stack we need a variable `size`, a `top` pointer to keep track of the top element in the stack, and a `*s` pointer variable to allocate memory in the heap for the stack dynamically.

```cpp
struct stack{
    int size;
    int top;
    int *s;
};
```


## Basic Operations

- **`push()`** - Inserts element in stack

- **`pop()`** - Delete element from stack

- **`peek()`** - Returns element at given position

- **`display()`** - Display stack elements

- **`isEmpty()`** - Check if stack is empty

- **`isFull()`** - Check if stack is full


## Features

- Stack is an ordered list of similar data type.
- Stack is a LIFO(Last in First out) structure or we can say FILO(First in Last out).
- `push()` function is used to insert new elements into the Stack and `pop()` function is used to remove an element from the stack. Both insertion and removal are allowed at only one end of Stack called Top.
- Stack is said to be in Overflow state when it is completely full and is said to be in Underflow state if it is completely empty.


## Implementation

We can implement stack using arrays as well as linked lists.

<Tabs
  defaultValue="c"
  values={[
    { label: 'Using Arrays', value: 'c', },
    { label: 'Using Linked List', value: 'cs', },
 
  ]
}>

<TabItem value="c">

```cpp
#include <iostream>
using namespace std;

struct stack{
    int size;
    int top;
    int *s;
};

void create(struct stack *st){
    cin >> st->size;
    st->top = -1;
    st->s = (int *)malloc(st->size*sizeof(int));
}

void push(struct stack *st, int x){
    if(st->top == st->size-1) cout << "Stack overflow";
    else {
        st->top++;
        st->s[st->top] = x;
    }
}

int pop(struct stack *st){
    int x = -1;
    if(st->top == -1) cout << "Stack underflow";
    else {
        x = st->s[st->top--];
        return x;
    }
    return x;
}

void display(struct stack st){
    for(int i=st.top;i>=0;i--){
        cout << st.s[i] << " ";
    }
    cout << "\n";
}

int peek(struct stack st, int index){
    int x=-1;
    if(st.top-index+1 < 0) cout << "Invalid index";
    x = st.s[st.top-index+1];
}

bool isEmpty(struct stack st){
    if(st.top==-1) return true;
    else return false;
}

bool isFull(struct stack st){
    if(st.top==st.size-1) return true;
    else return false;
}

int main(){
    struct stack st;
    create(&st);
    push(&st,10);
    push(&st,20);
    push(&st,30);
    push(&st,40);
    push(&st,50);
    display(st);
    push(&st,60);
}
```

</TabItem>
</Tabs>

:::caution INPUT
`5`
:::

:::important OUTPUT
`50 40 30 20 10`  
`Stack overflow`
:::


## Application

The simplest application of a stack is to reverse a word. You push a given word to stack - letter by letter - and then pop letters from the stack.

There are other uses also like:

- **Parsing**
- **Expression Conversion** (Infix to Postfix, Postfix to Prefix etc)
- **To reverse a string.**
- **DFS**
- **Compilers** - Compilers use stack to calculate value of expresslike `2 + 4 / 5 * (7 - 9)` by converting the expression to prefix to posftfix form.
- **In Browsers** - The back button in a browser saves all the URLs you have visited previously in a stack. Each time you visit a new page, it is added ont op of the stack. When you press the back button, the current URL is removed from the stack, and the previous URL is accessed.
- **Memory Management** - The stack inside our computer manages the memory. The memory is assigned in the contiguous memory blocks. This memory is known as stack memory as all the variables are assigned in a funcatoin call stack memory.

## Complexity

| Operation        |      Average Case      |   Worst Case |
| :-----------: | :-----------: | :-----: |
| Push     | O(1) | O(1) |
| Pop      |  O(1)    |   O(1) |
| Top |   O(1)    |    O(1) |
| Peek | O(1) | O(1) |
| Search | O(n) | O(n) | 
 