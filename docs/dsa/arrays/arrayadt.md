---
sidebar_label: Array ADT
title: Array as ADT
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
 

export const C= ({children,color}) => ( <span style={{
      color: color,
    }}>{children}</span> );

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
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


 

An array contains elements of same type arranged in sequential order and following
operations can be performed on arrays.

**`create()`** - Create array of size N. 

**`get()`** - Return an element from the array at any given index.  

**`insert()`** - Insert a new element at any index of array.  

**`delete()`** -  Delete any element at any index of array.  

**`set()`** -  Replace an element at any index by another element.  

**`display()`** - Traverse through the array to display the elements of array.  

**`search()`** - Perform linear search on array to find first occurrence of given element.  

## Implementation of array ADT

<Tabs
  defaultValue="c"
  values={[
    { label: 'Dynamically', value: 'c', },
    { label: 'Statically', value: 'cs', },
 
  ]
}>
<TabItem value="c">

```c
#include <stdio.h>
#include <stdlib.h>
struct Array
{
    int *A;
    int size;
    int length;
};
void create(struct Array *arr, int size)
{
    arr->size = size;
    arr->length = 0;
    arr->A = (int *)malloc(size * sizeof(int));
}
void display(struct Array arr)
{
    for (int i = 0; i < arr.length; i++)
    {
        printf("%d\n", arr.A[i]);
    }
}
void append(struct Array *arr, int element)
{
    if (arr->length < arr->size)
    {
        arr->A[arr->length] = element;
        arr->length++;
    }
    else
        printf("Array Full.");
}
void insert(struct Array *arr, int index, int element)
{
    if (index >= 0 && index <= arr->size)
    {
        for (int i = arr->length; i > index; i--)
        {
            arr->A[i] = arr->A[i - 1];
        }
        arr->A[index] = element;
        arr->length++;
    }
}
int delete (struct Array *arr, int index)
{
    if (index >= 0 && index <= arr->size)
    {
        int temp = arr->A[index];
        for (int i = index; i < arr->length; i++)
        {
            arr->A[i] = arr->A[i + 1];
        }
        arr->length--;
        return temp;
    }
}
void search(struct Array arr, int element)
{
    int index = 0, x = 0, found = 0;
    for (int i = 0; i < arr.length; i++)
    {
        if (arr.A[i] == element)
        {
            index = i;
            x = arr.A[i];
            found = 1;
            break;
        }
    }
    if (found)
    {
        printf("First occurrence fo element %d found at index %d", x, index);
    }
    else
    {
        printf("Element not found");
    }
}
int get(struct Array arr, int index)
{
    return arr.A[index];
}
void set(struct Array *arr, int index, int value)
{
    arr->A[index] = value;
}
int main()
{
    struct Array test;
    create(&test, 5);
    append(&test, 20);
    append(&test, 30);
    append(&test, 520);
    append(&test, 60);
    insert(&test, 2, 69);
    display(test);
    int deleted = delete (&test, 0);
    printf("Deleted %d\n", deleted);
    display(test);
    search(test, 520);
}
```

</TabItem>
<TabItem value="cs">

```c
#include <stdio.h>
int size;
int length = 0;
void display(int arr[])
{
    for (int i = 0; i < length; i++)
    {
        printf("%d\n", arr[i]);
    }
}
void set(int arr[], int index, int value)
{
    arr[index] = value;
}
void append(int arr[], int element)
{
    if (length < size)
    {
        arr[length] = element;
        length++;
    }
    else
    {
        printf("Array is full");
    }
}
void insert(int arr[], int index, int element)
{
    if (index >= 0 && index <= size)
    {
        for (int i = length; i > index; i--)
        {
            arr[i] = arr[i - 1];
        }
        arr[index] = element;
        length++;
    }
}
int delete (int arr[], int index)
{
    if (index >= 0 && index <= size)
    {
        int temp = arr[index];
        for (int i = index; i < length; i++)
        {
            arr[i] = arr[i + 1];
        }
        length--;
        return temp;
    }
}
void search(int arr[], int element)
{
    int found = 0, index = 0;
    for (int i = 0; i < length; i++)
    {
        if (arr[i] == element)
        {
            found = 1;
            index = i;
        }
    }
    if (found)
        printf("First occurrence of element %d found at index %d", element, index);
}
int main()
{
    int length = 0;
    int size;
    printf("Enter size of array:\n");
    scanf("%d", &size);
    int array[size];
    append(array, 50);
    append(array, 60);
    append(array, 70);
    insert(array, 0, 500);
    insert(array, 2, 69);
    display(array);
    printf("Deleted element is %d\n", delete (array, 2));
    display(array);
}
```

</TabItem>
<TabItem value="java">

```java
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello, World");
  }
}
```

</TabItem>
</Tabs>


