---
sidebar_label: Bit Manipulation
title: Bit Manipulation
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

## Bitwise Operators

- `XOR` of two same numbers is `0`
- `XOR` with zero is the number itself.

| Operator | Use | 
|:--------:|:-------:|
| **&** (AND) | Can be used to check if a number is odd or even `(x & 1)` is non-zero only if x is odd.|
| **^** (XOR) | XOR of two same numbers is 0 |
|**<<** (Left Shift) | Equivalent to multiplication by 2 | 
|**>>** (Right Shift) | Equivalent to division by 2 | 

## Check odd or even

