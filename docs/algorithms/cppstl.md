---
sidebar_label: STL
title: STL
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

## Vector

Vectors are basically dynamic arrays that can grow or shrink in size automatically when an element is inserted or deleted.

- Vector elements are stored contiguously just like in arrays
- Can be accessed and traversed just like arrays
- Think of vectors as arrays only, only superior.  

#### Declare

**Some ways to declare and initialize vector objects.**
```cpp
vector<int>b; //declare vector object
vector<int>a(10,0); //declare and initialize vector of size 10, with all values as 0.
vector<int>c(a.begin(),a.end());// initialize vector c with all elements of vector a.
vector<int>d{1,2,3,4,5,6}; //declare and initialize vector with some values.
vector<int>e = {1,2,3,5,6}; //same as above.
```
 

**Iterate over a vector**
```cpp
vector<int>v;
//use for loop till v.size()
for(int i=0;i<v.size();i++){
  cout << v[i];
}
//use for each loop //probably the best way if u want to access the elements.
for(auto x:v){
  cout << x;
}
//use iterators 
//if u want to replace auto, use vector<int>::iterator it;  
//using auto keyword will do that automatically for you.
for(auto it=v.begin();it!=v.end();it++){
  cout << (*it) << " ";
}
```

#### Taking input from user.
```cpp
int n;
cin >> n; //number of elements.
vector<int>v(n); //declare vector of n size;
for(int i= 0; i < n; i++) {
  cin >> v[i]; //just like arrays.
}
```

#### Some more vector methods

| Method | Description | Complexity |
|:------:|:-----------:|:-----------:|
|**`push_back()`**| Inserts element at the end and also if the vector capacity is full it will double its size by allocating double the current memory. If the next memory is not available, it will try to find contiguous memory and copy all the elements to it and delete the previously allocated memory | Amortized `O(1)` |
|**`pop_back()`** | Removes last element | `O(1)` |
|**`clear()`** | Removes all the elements from the vector | `O(N)` | 
|**`size()`**| Returns the number of elements | `O(1)` | 
|**`max_size()`** | Returns maximum number of elements the vector can hold, depends on the system | `O(1)` |
|**`capacity()`** | Returns the size of the storage currently allocated | `O(1)` | 
|**`insert()`** | Insert elements at given position | O(N+M) | 
|**`erase()`** | Erase element at given position/range| O(N+M) | 
|**`empty()`** | Returns true if the vector is empty | `O(1)` | 





## Pairs

Pair is a container which helps to bind two values as a single object.

- First element is refered as `first` and second as `second` and the order is fixed. (first,second)

- Use `dot` operator followed by `first` or `second ` to access the elements


- Used to combine together two values which may be in different type and store as a single unit.

- There are many ways you can create/initialize a pair.  
`make_pair(value1,value2)` - using make_pair function.  
directly initializing `first` and `second` values.  

- Can be assigned, copied and compared.  
`=` can assign a pair to another  
`==` returns true if two pairs contain same values  
`!=` returns true if two pairs are not equal  
`<` and `>` operator work only by comparing the **`first`** values of pairs being compared.


- Can create array or vector of pairs.


```cpp
//method 1
pair<int,char>p;
p.first = 25;
p.second = 'A';
//method 2
pair<int,char>p2(p);
//method 3
pair<int,int> p3 = make_pair(100,200);
```



## sort()

- Takes two parameters, starting point and length upto which we want the array/vector to be sorted.
- Third parameter is for comparator, incase we want to sort them in decreasing order or lexicographically.

```cpp
int a[] = {40,230,10,203,501,33};
int N=6;
vector<int>v {150,30,50,100};
sort(a,a+n); //sort array from start to end, the end is exclusive hence a+n;
sort(v.begin(),v.end()); //sort a vector
```

- Pass `greater<int>()` to the sort function to sort in decreasing order.

## find()

- Find an element in the given range.
- If not found, the funtion returns the last index.

```cpp
int a[10] = {1,2,3,4,5,6,8,9,10};
int n = 10;
vector<int>v {5,5012,3,123,1};
auto it = find(a,a+n,6);
cout << it-a << space;
auto it2 = find(v.begin(),v.end(),5012);
cout << it2-v.begin();
```

## binary_search()

- Array/vector must be sorted for this function to work.
- Returns `true` or `false` if the element is present or not.

**Usage:**
```cpp
bool present = binary_search(begin,end,key);
```

### lower_bound()

- Returns address of the first element which is `>=` key.
- You can pass custom comparators just in case.

```cpp
vector<int> a {1,15,20,25,30,35};
auto it = lower_bound(a.begin(),a.end()20);
//prints 2;
cout << it-a.begin() << endl;
//getting index of a key if elements arenot distinct.
vector<int> b {1,15,20,20,20,20,30,35};
auto it2 = lower_bound(b.begin(),b.end()20);
//prints 2;
cout << it2-b.begin() << endl;
//if the key is not present
auto it3 = lower_bound(b.begin(),b.end()25);
//prints 6, i.e it will return theelement just greater than 25, which is30.
cout << it3-b.begin() << endl;
```

### upper_bound()

- Returns address of the first element that is strictly `>` than key.

```cpp
vector<int> a {1,15,20,25,30,35};
auto it = upper_bound(a.begin(),a.end()20);
//prints 3, as  it is next elementstrictly greater than 20.
cout << it-a.begin() << endl;
//prints 4
it = upper_bound(a.begin(),a.end(),27);
cout << it-a.begin() << endl;
```
- If you do upper_bound - lower_bound for an element which is occuring x times you will get the number of times it is occuring.

```cpp
vector<int> a {1,15,20,20,20,20,20,25,30,35};
auto lb = lower_bound(a.begin(),a.end()20);
auto up = upper_bound(a.begin(),a.end()20);
//prints number of times 20 is occuring. i.e 5;
cout << up - lb << endl;
```
### Using comparators
- If we dont use a comparator, we will get one value less if the value of `money` becomes equal to any element in the `coins` array.

**Money Change Problem**

```cpp
bool compare(int a,int b){
	return a<=b;
}
int main(){
    FastIO;
    int coins[] = {1,2,5,10,20,50,100,200,500,2000};
    int n = sizeof(coins)/sizeof(int);
 	int money = 168;
 	while(money>0){
 		auto lb = lower_bound(coins,coins+n,money,compare) - coins - 1;
	 	int m = coins[lb];
	 	cout << m << space;
	 	money -= m;
 	}
}
//Output: 100 50 10 5 2 1 
```

## Misc

**Some more handy methods:**

- **`swap(a,b)`** - swaps two elements/variable/vector/array/string chars/etc.

- **`max(a,b)`** - returns max of a & b.  
if there are more than two things you want to compare, you can pass it as like this   
`max({a,b,c,d,e...})`

- **`min(a,b)`** - returns min of a & b.  
similarly `min({a,b,c,d,e...})`

- **`reverse(start,end)`** - reverse array/vector in range

- **`next_permutation(start,end)`** - gives next permutation in a array/vector.



