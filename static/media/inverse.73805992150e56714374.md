### Inverse: $f \cdot \bar{f} \simeq e$

Suppose again we have some loop $f:I\mapsto X$ with basepoint $x_0$, we define $\bar{f}:I\mapsto X$ to be the inverse path of $f$ such that

$\bar{f}(s)=f(1-s)$

and so the concatenation of paths

$
\begin{aligned}
(f \cdot \bar{f}) (s)
&= 
\begin{cases}
   f(2s) &s\in\left[0,\frac{1}{2}\right) \\
   \bar{f}(2s-1) &s\in\left[\frac{1}{2},1\right] 
\end{cases}
\\&= 
\begin{cases}
   f(2s) &s\in\left[0,\frac{1}{2}\right) \\
   f(1-(2s-1)) &s\in\left[\frac{1}{2},1\right] 
\end{cases}
\\&=
\begin{cases}
   f(2s) &s\in\left[0,\frac{1}{2}\right) \\
   f(2-2s) &s\in\left[\frac{1}{2},1\right] 
\end{cases}
\end{aligned}
$

As such, we want to define a path homotopy $H$ to show that traversing $f$, then retreating back along $\bar{f}$, is path homotopic to
the constant path $e$ (i.e. doing nothing).

$
\begin{aligned}
H(0,t)&= H(1,t) = x_0 \\
H(s,0)&=f \cdot \bar{f} \\ 
H(s,1)&=e
\end{aligned}
$

Let us, again, consider a decomposition of the unit square $I \times I$. We observe we can isolate $f$ and $\bar{f}$ from $e$ by the lines

$s=\frac{1-t}{2}$ and $s=\frac{1+t}{2}$

Thinking about this closely, as $t$ varies in $H$, what we would like is to travel $f \cdot \bar{f}$ entirely at $t=0$, and not move at all when $t=1$.
So, in between, we should travel $f$ for some distance on $s\in\left[0,\frac{1-t}{2}\right)$, remain stationary between $s\in\left[\frac{1-t}{2},\frac{1+t}{2}\right)$, and then return along $\bar{f}$ till $s=1$.

In which case, the speed in which we traverse $f$ and $\bar{f}$ is fixed in terms of $s$ by $f \cdot \bar{f}$. 
Note, we will write $\bar{f}$ as a reparameterization of $f$ for the sake of consistency across the piece-wise terms.

$\\
H(s,t) =  
\begin{cases}
   f(2s) &s\in\left[0,\frac{1-t}{2}\right)\\
   f(...) &s\in\left[\frac{1-t}{2},\frac{1+t}{2}\right)\\
   f(2-2s) &s\in\left[\frac{1+t}{2},1\right]
\end{cases}
$

It remains to make $H$ continuous at the points in which it stops moving; $s\in\left[\frac{1-t}{2},\frac{1+t}{2}\right)$

$\\
H(s,t) =  
\begin{cases}
   f(2s) &s\in\left[0,\frac{1-t}{2}\right)\\
   f(1-t) &s\in\left[\frac{1-t}{2},\frac{1+t}{2}\right)\\
   f(2-2s) &s\in\left[\frac{1+t}{2},1\right]
\end{cases}
$

And so we have defined a valid homotopy that satisfies the constraints, showing $f \cdot \bar{f} \simeq e$; as desired.

In the illustration that follows, we have two loops: $f \cdot \bar{f}$ in *red*, and $e$ in *blue*. And the desired homotopy between them is in *yellow*