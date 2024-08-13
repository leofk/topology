# The Fundamental Group of $S^1$

One of the foundational results in algebraic topology is the calculation of the fundamental group of the circle, $S^1$, which is shown to be isomorphic to the group of integers $\Z$ under addition. This result not only provides a concrete example of a non-trivial fundamental group but also introduces the concept of covering spaces, a powerful tool in topology. The proof involves analyzing loops in $S^1$ and their relation to paths in the real line, $\R$, thereby establishing a correspondence between the set of homotopy classes of loops and the integers. Through this proof, we gain insight into the algebraic structure underlying the topological space of the circle, paving the way for further exploration into more complex spaces and their fundamental groups.

Before we get into the proof, let us build up some intuition on what we might expect from elements in the fundmental group of the circle. 

Suppose we base our loops at $x_0=(1,0)$. An obvious example is the trivial loop, which remains stationary at $(1,0)$ and corresponds to the identity element in the group. More interestingly, we can consider loops that traverse the circle once in a clockwise direction, twice, and so on. The same can be said for counter clockwise rotations. Now these loops appear distinct up to homotopy, but this is a non-trivial observation. For this reason, we call to covering spaces.

## Covering Spaces and Maps

Consider the following map

$
\begin{aligned}
p:\underset{s}{\R} &\underset{\mapsto}{\longrightarrow} \underset{(\cos 2\pi s, \sin 2\pi s)}{S^1}
\end{aligned}
$

This is the map that takes any value on the real line to point on the circle. $\R$ can be geometrically visualized as a single helix wrapping up above and below the circle. This map $p$ is also known as a covering map.

To define the relationship between the two spaces, consider the following path in $\R$.

$
\begin{aligned}
\widetilde{\omega_n}: \underset{s}{I} &\underset{\mapsto}{\longrightarrow} \underset{ns}{\mathbb{R}}
\end{aligned}
$

This is the path from 0 to $n$ on $\R$; where $n \in \Z$. 

Using the covering map, we can project this path on $\R$ to a loop on $S^1$ by the following composition
$\omega_n = p \circ \widetilde{\omega_n}$ 

$
\begin{aligned}
\omega_n:\underset{s}{I} \underset{\mapsto}{\longrightarrow} \underset{(\cos 2\pi n s, \sin 2\pi n s)}{S^1}
\end{aligned}
$

this yield a loop based at $x_0=(1,0)$ and travels clockwise around $S^1$, $n$ times.

