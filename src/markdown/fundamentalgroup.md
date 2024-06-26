## The Fundamental Group

The **fundamental group**, denoted $\pi_1(X,x_0)$, is the set of all homotopy classes $\left[f\right]$
of loops $f:I\mapsto X$ with basepoint $x_0$. 

> *Proposition*: The fundamental group is a group under the path conatenation operation.

> *Proof*

We want to show the group is closed under the concatenation operation and all group axioms hold.

By restricting paths to be loops with a fixed basepoint $x_0\in X$, we guarentee the concatenation
of any two loops is defined.

### Identity: $f \cdot e \simeq f$

Suppose we have some loop $f:I\mapsto X$ with basepoint $x_0$, let $e:I\mapsto X$ be the constant path
defined by $e(s) = x_0$; or in other words, the identity element. We want to define a homotopy $H:I \times I \mapsto X$ between
$f \cdot e$ and $f$ to show these two loops are homotopic.

$
\begin{aligned}
(f \cdot e) (s) 
&=  
\begin{cases}
   f(2s) &s\in\left[0,\frac{1}{2}\right) \\
   e(2s-1) &s\in\left[\frac{1}{2},1\right] 
\end{cases} 
\\&=  
\begin{cases}
   f(2s) &s\in\left[0,\frac{1}{2}\right) \\
   x_0 &s\in\left[\frac{1}{2},1\right] 
\end{cases}
\end{aligned}
$

#### Method 1

One was in which to define the neccessary path homotopy is to observe that $f \cdot e$ is a **reparameterization** of $f$.

A **reparameterization** of $f$ is the composition $f\circ \varphi$ where $\varphi:I\mapsto I$ is any continuous map such that $\varphi(0)=0$ and $\varphi(1)=1$. This is valuable as a reparameterization of a path preserves it's homotopy class; in that $f\circ \varphi \simeq f$. 
This is given by the homotopy $H = f \circ \varPhi$.

$
\varPhi(s,t) :=(1-t)\varphi(s) + ts
$

Thus, in our case, if we were able to define $\varphi$ such that $f\circ \varphi = f \cdot e$, then $f \cdot e \simeq f$ will be trivial by $H$.

Well, by observation, $f \cdot e$ is essentially the loop in which we do $f$ at twice speed. So let us define $\varphi$ that would make $f$ achieve this:

$\\
\varphi (s) =  
\begin{cases}
   2s &s\in\left[0,\frac{1}{2}\right) \\
   1 &s\in\left[\frac{1}{2},1\right] 
\end{cases}
$

Note that $\varphi(0)=0$, $\varphi(1)=1$, and $\varphi$ is continuous at $s=\frac{1}{2}$; as required.

So we have the composition

$
\begin{aligned}
f \circ \varphi 
&= 
\begin{cases}
   f(\varphi(s)) &s\in\left[0,\frac{1}{2}\right) \\
   f(\varphi(s)) &s\in\left[\frac{1}{2},1\right] 
\end{cases}
\\&= 
\begin{cases}
   f(2s) &s\in\left[0,\frac{1}{2}\right) \\
   f(1) &s\in\left[\frac{1}{2},1\right] 
\end{cases}
\\&=
\begin{cases}
   f(2s) &s\in\left[0,\frac{1}{2}\right) \\
   x_0 &s\in\left[\frac{1}{2},1\right] 
\end{cases}
\\&=
f \cdot e
\end{aligned}
$

and so by the homotopy $H$ from earlier, we have $f \cdot e \simeq f$ as desired. 

#### Method 2

Another way in which to define a homotopy $H$ for these loops is observe the interaction between 
variables $s$ and $t$ on $I \times I$.

# TODO

We illustrate such maps below.

We have two loops: $f \cdot e$ in *red*, and $f$ in *blue*. The homotopy computed using method 1 is in *green*, and the homotopy computed using method 2 is in *yellow*.