### Inverse: $f \cdot \bar{f} \simeq e$

Suppose again we have some loop $f:I\mapsto X$ with basepoint $x_0$, we define $\bar{f}:I\mapsto X$ to be the inverse path of $f$ such that

$\bar{f}(s)=f(1-s)$

As such, we want to define a path homotopy $H$ to show that going traversing $f$, then retreating back along $\bar{f}$, is path homotopic to
the constant path $e$ (i.e. doing nothing).

$
\begin{aligned}
(f \cdot \bar{f}) (s)
&= 
\begin{cases}
   f(2s) &s\in[0,\frac{1}{2}) \\
   \bar{f}(2s-1) &s\in[\frac{1}{2},1] 
\end{cases}
\\&= 
\begin{cases}
   f(2s) &s\in[0,\frac{1}{2}) \\
   f(1-(2s-1)) &s\in[\frac{1}{2},1] 
\end{cases}
\\&=
\begin{cases}
   f(2s) &s\in[0,\frac{1}{2}) \\
   f(2-2s) &s\in[\frac{1}{2},1] 
\end{cases}
\end{aligned}
$

# TODO