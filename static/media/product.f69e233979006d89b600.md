### Path Concatenation

Given two paths $f,g:I \mapsto X$ such that $f(1)=g(0)$, we
call the operation $f \cdot g$ a **path concatenation** or **product path**. This operation defines a map that
first traverse $f$, and then $g$. In particular, both paths are traversed twice as fast so that $f \cdot g$ completes in $I$.

$\\
(f \cdot g) (s) =  
\begin{cases}
   f(2s) &s\in\left[0,\frac{1}{2}\right) \\
   g(2s-1) &s\in\left[\frac{1}{2},1\right] 
\end{cases}
$