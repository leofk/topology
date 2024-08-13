### Associativity: $f \cdot (g \cdot h) \simeq (f \cdot g) \cdot h$

Suppose we have three loops $f,g,h:I \to X$ all with basepoint $x_0$. We want to show that rearranging the parentheses in 
an expression with the path concatenation operation with not change the result.

$\\
(f \cdot (g \cdot h)) (s) =
\begin{cases}
   f(2s) &s\in\left[0,\frac{1}{2}\right) \\
   g(4s-2) &s\in\left[\frac{1}{2},\frac{3}{4}\right) \\
   h(4s-3) &s\in\left[\frac{3}{4},1\right]
\end{cases}
$

$\\
((f \cdot g) \cdot h) (s) =
\begin{cases}
   f(4s) &s\in\left[0,\frac{1}{4}\right) \\
   g(4s-1) &s\in\left[\frac{1}{4},\frac{1}{2}\right) \\
   h(2s-1) &s\in\left[\frac{1}{2},1\right]
\end{cases}
$

#### Method 1

Similar to the identity axiom, we observe that $f \cdot (g \cdot h)$ is a reparametriziation of $(f \cdot g) \cdot h$. 
In particular, we would want to have $f$ go at half speed, $g$ to stay the same speed, and $h$ to increase by twice speed.

$\\
\varphi (s) =  
\begin{cases}
   \frac{s}{2} &s\in\left[0,\frac{1}{2}\right) \\
   s - \frac{1}{4} &s\in\left[\frac{1}{2},\frac{3}{4}\right) \\
   2s - 1 &s\in\left[\frac{3}{4},1\right] 
\end{cases}
$

Again note that $\varphi(0)=0$, $\varphi(1)=1$, and $\varphi$ is continuous at $s=\frac{1}{2}$ and $\frac{3}{4}$; as required.

So we have the composition

$
\begin{aligned}
f \cdot (g \cdot h) \circ \varphi
&= 
\begin{cases}
   f(4\varphi(s)) & s \in \left[0, \frac{1}{2}\right) \\
   g(4\varphi(s) - 1) & s \in \left[\frac{1}{2}, \frac{3}{4}\right) \\
   h(2\varphi(s) - 1) & s \in \left[\frac{3}{4}, 1\right]
\end{cases} 
\\&=
\begin{cases}
   f(4 \left( \frac{s}{2} \right)) & s \in \left[0, \frac{1}{2}\right) \\
   g(4 \left( s - \frac{1}{4} \right) - 1) & s \in \left[\frac{1}{2}, \frac{3}{4}\right) \\
   h(2 \left( 2s - 1 \right) - 1) & s \in \left[\frac{3}{4}, 1\right]
\end{cases} 
\\&=
\begin{cases}
   f(2s) & s \in \left[0, \frac{1}{2}\right) \\
   g(4s - 2) & s \in \left[\frac{1}{2}, \frac{3}{4}\right) \\
   h(4s - 3) & s \in \left[\frac{3}{4}, 1\right]
\end{cases} 
\\&=
f \cdot (g \cdot h)
\end{aligned}
$

And thus since $f \cdot (g \cdot h) \circ \varphi = f \cdot (g \cdot h)$, we show $f \cdot (g \cdot h) \simeq (f \cdot g) \cdot h$ by the homotopy $H_1 = \left(f \cdot (g \cdot h)\right) \circ \varPhi$.

#### Method 2

As with the other axioms, here we can also consider defining a homotopy by appealing to a decomposition of the unit square $I \times I$.

Suppose we want $H_2$ such that

$
\begin{aligned}
H(0,t)&= H_2(1,t) = x_0 \\
H_2(s,0)&=f \cdot (g \cdot h)\\ 
H_2(s,1)&=(f \cdot g) \cdot h
\end{aligned}
$

we can isolate each loop $f$, $g$, and $h$ by the following two lines

$s=\frac{2-t}{4}$ and $s=\frac{3-t}{4}$

and so plugging these bounds into the homotopy we have

$\\
H_2(s,t) =  
\begin{cases}
   f(...) &s\in\left[0,\frac{2-t}{4}\right) \\
   g(...) &s\in\left[\frac{2-t}{4},\frac{3-t}{4}\right) \\
   h(...) &s\in\left[\frac{3-t}{4},1\right] 
\end{cases}
$

Now it remains to make $H_2$ continuous and satisfy the endpoint constraints. 

$\\
H_2(s,t) =  
\begin{cases}
   f\left(\frac{4s}{2-t}\right) &s\in\left[0,\frac{2-t}{4}\right) \\
   g\left(4s+t-2\right) &s\in\left[\frac{2-t}{4},\frac{3-t}{4}\right) \\
   h\left(\frac{4s+t-3}{1+t}\right) &s\in\left[\frac{3-t}{4},1\right] 
\end{cases}
$

And thus we have a valid homotopy, showing $f \cdot (g \cdot h) \simeq (f \cdot g) \cdot h$; as desired.

In the illustration that follows, we have two loops: $(f \cdot g) \cdot h$ in *red*, and $f \cdot (g \cdot h)$ in *blue*. The homotopy computed using method 1 is in *green*, and the homotopy computed using method 2 is in *yellow*. And as with the identity axiom, we also illustrate $H_2(s,t)$ and $\varPhi\left(s,t\right)$ as they relate to their corresponding loops.
