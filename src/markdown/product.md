### Path Concatenation

Provided two paths $f,g:I \mapsto X$ such that $f(1)=g(0)$ (in that $g$ starts where $f$ ends), we
call the operation $f \cdot g$ a **path concatenation** or **product path**. This operation defines a map that
first traverse $f$, and then $g$. In particular, both paths are traversed twice as fast in order for $f \cdot g$
to complete in $I$.

$\\
(f \cdot g) (s) =  
\begin{cases}
   f(2s) &s\in[0,\frac{1}{2}) \\
   g(2s-1) &s\in[\frac{1}{2},1] 
\end{cases}
$