## Homotopy

A **homotopy** between paths $f$ and $g$ is a continuous family of maps 

$H:\underset{s}{I} \underset{\times}{\times} \underset{t}{I} \underset{\mapsto}{\to} \underset{H(s,t)}{X}$ 

such that

$
\begin{aligned}
H(0,t)&=x_0 \\
H(1,t)&=x_1 \\
H(s,0)&=f \\ 
H(s,1)&=g 
\end{aligned}
$

If there exists such a homotopy, we say the paths are **homotopic** and denote $f \simeq g$.

Below we illustrate a homotopy between loops:
$f: I \to \reals^3$ in *red* and $g: I \to \reals^3$ in *blue*.
Observe how varying the *time* parameter illustrates a homotopy $H$ between the two loops (in *green*).
Since $\reals^3$ is convex, $H$ is simply the convex combination 

$H(s,t):=(1-t)f(s)+(t)g(s)$



