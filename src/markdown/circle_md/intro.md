# The Fundamental Group of $S^1$

One of the foundational results in algebraic topology is the calculation of the fundamental group of the circle, $S^1$, which is shown to be isomorphic to the group of integers $\Z$ under addition. This result not only provides a concrete example of a non-trivial fundamental group but also introduces the concept of covering spaces, a powerful tool in topology. The proof involves analyzing loops in $S^1$ and their relation to paths in the real line, $\R$, thereby establishing a correspondence between the set of homotopy classes of loops and the integers. Through this proof, we gain insight into the algebraic structure underlying the topological space of the circle, paving the way for further exploration into more complex spaces and their fundamental groups.

Now what might we expect from elements of the fundamental group of $S^1$? Suppose we base our loops at $x_0=(1,0)$. An obvious example is the trivial loop, which remains stationary at $(1,0)$ and corresponds to the identity element in the group. But we might also consider loops that wind around the circle once in a clockwise direction, twice, and so on. And the same counter clockwise. Now these loops appear distinct up to homotopy, but this is a non-trivial observation. For this reason, we call to covering spaces.

## Covering Spaces and Maps

A **covering space** of $X$ consists of a space $\widetilde{X}$ and a map $p:\widetilde{X}\to X$.

A covering space satisfies the condition that for each point $x\in X$, there is an open neighborhood $U$ of $x$ in $X$ such that
its preimages, $p^{-1}(U)$, is a union of disjoint open sets each of which maps homeomorphically onto $U$ by $p$. Such $U$ is said to be *evenly covered*. 

## Covering of $S^1$

In the case of $S^1$, consider $\R$ as a covering space by the map

$
\begin{aligned}
p:\underset{s}{\R} &\underset{\mapsto}{\longrightarrow} \underset{(\cos 2\pi s, \sin 2\pi s)}{S^1}
\end{aligned}
$

This is the map that takes any value on the real line to a point on the circle. $\R$ can be geometrically visualized as a helix wrapping above and below the circle. 

To define the relationship between the two spaces, consider the following path in $\R$.

$
\begin{aligned}
\widetilde{\omega_n}: \underset{s}{I} &\underset{\mapsto}{\longrightarrow} \underset{ns}{\mathbb{R}}
\end{aligned}
$

This is the path from 0 to $n$ on $\R$; where $n \in \Z$. Using the covering map, we can project this path on $\R$ to a loop on $S^1$ by the following composition $\omega_n = p \circ \widetilde{\omega_n}$. This action is expressed by saying $\widetilde{\omega_n}$ is a **lift** of $\omega_n$.

$
\begin{aligned}
\omega_n:\underset{s}{I} \underset{\mapsto}{\longrightarrow} \underset{(\cos 2\pi n s, \sin 2\pi n s)}{S^1}
\end{aligned}
$

This map yields a loop based at $x_0=(1,0)$ and winds around $S^1$, $n$ times. 

In the illustration that follows, we demonstrate the interaction between the covering space $\R$ and $S^1$ as they relate to the aformentioned maps. Note for simplicity, we have restricted $n\in[-5,5]$, however, $n$ can of course be any $\Z$

