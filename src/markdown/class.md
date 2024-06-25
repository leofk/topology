## Homotopy Class

> *Proposition*: The relation on paths which are homotopic is an equivalence relation.

The **homotopy class** of a path $f$, denoted $[f]$, is the equivalence class of $f$ under a homotopy.

> *Proof*

We want to show that path homotopies are reflexive, symmetric, and transitive.

### Reflexivity:  $f \simeq f$

This holds trivially under the homotopy $H \coloneqq f(s)$ 

### Symmetry:  $f \simeq g \implies g \simeq f$

Suppose there is a homotopy $F$ between $f$ and $g$ such that: 

$
\begin{aligned}
F(0,t)&=x_0\\
F(1,t)&=x_1\\
F(s,0)&=f\\
F(s,1)&=g\\
\end{aligned}
$

Then we can define a homotopy $G \coloneqq F(s,1-t)$ that instead starts at $g$ and ends at $f$ giving us $g \simeq f$.

$
\begin{aligned}
G(0,t) &= F(0, 1-t) = x_1 \\
G(1,t) &= F(1, 1-t) = x_0 \\
G(s,0) &= F(s, 1-0) = g \\
G(s,1) &= F(s, 1-1) = f \\
\end{aligned}
$

### Transitivity:  $f \simeq g$ and $g \simeq h \implies f \simeq h$

Suppose we have the homotopy $A$ between $f$ and $g$, and the homotopy $B$ between $g$ and $h$.
To define a homotopy $C$ between $f$ and $h$, we want to make use of the fact that $A$ can take us from $f$ to $g$, and then $B$ can take us from $g$ to $h$. Since the homotopy needs only to be continuous within the endpoints, nothing is preventing us from stopping at $g$; so long as we have $C(s,0)=f$ and $C(s,1)=h$.

So, for simplicity, let us define $C$ to take $A$ for the first half of the time and then $B$ for the other half. Note we will also need to speed up both $A$ and $B$ by a factor of 2 so they complete within their newly compressed intervals. 

$\\
C(s,t) :=  
\begin{cases}
   A(s,2t) &t\in[0,\frac{1}{2}) \\
   B(s,2t-1) &t\in[\frac{1}{2},1] 
\end{cases}
$

We illustrate such maps below.

The three loops are colored the primaries: $f$ as *red*, $g$ as *blue*, $h$ as *yellow*.
And the maps between the colors are their respective secondary colors: $A$ is *purple*, $B$ is *green*, $C$ is *orange*.
In particular, when varying *time*, observe how $C$ does $A$ then $B$ in twice the speed.