---
sidebar_label: Basics
title: Basic
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

## Get digits

- Get each digits of a number
- Doing `%10` will get you the last digit of a number.
- Floor division by 10 will remove the last digit of a number.

```cpp
int sum = 0;
while(n) {
    int remainder = n%10;
    //do something with last digit of a number
    sum+=remainder;
    n/=10; //floor division of number to remove the last digit.
}
```

## Binary-Decimal

- Convert to Binary number to Decimal form.

```cpp
int n=101;
int power = 1;
int ans = 0
while(n) {
    int ld = n%10;
    ans += ld*power;
    power = power * 2;
    n/=10;
}
```

## Min-Max

```cpp
int largest = INT_MIN;
int smallest = INT_MAX;
int a[N];
for(int i = 0; i < N; i++) {
  largest = max(largest,a[i]);
  smallest = min(smallest,a[i]);
}
```

## Reverse Number

```cpp
while(n){
    int ld = n%10;
    rev = rev*10 + ld;
    n/=10;
}
```
## Naive PrimeCheck
```cpp
bool isPrime(int number){
    if(number==0 or number==1) return false;
    for(int i=2;i*i<=number;i++){
        if(number%i==0) {
            return false;
        }
    }
    return true; //O(sqrt(N))
}
```

## Bitwise Operators

- All are binary operators. Requires two operands.
- These operators work on bit level of two integers. Meaning, they do respective operation on each bit of numbers.

| Operator | Use | 
|:--------:|:-------:|
| **&** (AND) | Can be used to check if a number is odd or even `(x & 1)` is non-zero only if x is odd.|
| **^** (XOR) | XOR of two same numbers is 0 |
|**<<** (Left Shift) | Equivalent to multiplication by 2 | 
|**>>** (Right Shift) | Equivalent to division by 2 | 

