### Associativity: $f \cdot (g \cdot h) \simeq (f \cdot g) \cdot h$

Suppose we have three loops $f,g,h:I\mapsto X$ all with basepoint $x_0$. We want to show that rearranging the parentheses in 
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

And thus since $f \cdot (g \cdot h) \circ \varphi = f \cdot (g \cdot h)$, we show $f \cdot (g \cdot h) \simeq (f \cdot g) \cdot h$ by the homotopy $H = \left(f \cdot (g \cdot h)\right) \circ \varPhi$.

#### Method 2

Another way in which to define a homotopy $H$ for these loops is observe the interaction between 
variables $s$ and $t$ on $I \times I$.

# TODO

We illustrate such maps below.

We have two loops: $(f \cdot g) \cdot h$ in *red*, and $f \cdot (g \cdot h)$ in *blue*. The homotopy computed using method 1 is in *green*, and the homotopy computed using method 2 is in *yellow*.
