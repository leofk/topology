# The Fundamental Group is a Group

In algebraic topology, the **fundamental group** provides a powerful algebraic tool for understanding the structure of topological spaces by examining the loops within them. To define the fundamental group formally, we start by considering loops based at a specific point in the space and investigate how these loops can be combined and manipulated. The fundamental group captures this structure by associating to each space a group where the elements are equivalence classes of loops, and the group operation is loop concatenation. 

This exploration aims to illustrate how the fundamental group satisfies the group axioms, ensuring that it forms a true mathematical group. By understanding these foundational concepts, we gain deeper insights into how topological spaces can be algebraically represented and analyzed.

## Loops

A **path** in a space $X$ is defined by the map 

$f:\underset{s}{I} \underset{\mapsto}{\longrightarrow} \underset{f(s)}{X}$ 

where $I$ is the unit interval $[0,1]$. 

A **loop** is path such that we restrict the start and end points to be the same; $f(0)=f(1)$. We call this point the **basepoint**; denoted $x_0$.