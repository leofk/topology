
Given these components, consider the map $\Phi$ 

$
\begin{aligned}
\Phi: \underset{n}{\mathbb{Z}} &\underset{\mapsto}{\longrightarrow} \underset{[\omega_n]}{\pi_1(S^1, x_0)} 
\end{aligned}
$

> Proposition: $\Phi$ is a group isomorphism.

> Proof


## $\Phi$ is a Group Homomorphism

To begin, we check that $\Phi$ is a group homomorphism.

$\Phi(m+n)=\Phi(m)\cdot\Phi(n)$

By definition


$
\begin{aligned}
\Phi(m+n)
&=[\omega_{m+n}] \\
 &= [p \circ \widetilde{\omega_{m+n}}]
\end{aligned}
$

Now $\widetilde{\omega_{m+n}}$ is the path in $\R$ that goes from 0 to $m+n$. Well we can rewrite this in terms of $\widetilde{\omega_m}$ which and $\widetilde{\omega_n}$ by concatenating them, but we need to make a slight modification so the endpoints agree. In particular, what we need is for $\widetilde{\omega_n}$, which current starts at 0, to instead start at $m$. Thus it would helpful it would could translate $\widetilde{\omega_n}$ by $m$. Let $\tau_m$ be such a translation.

$\tau_m:\underset{s}{\R} \underset{\mapsto}{\longrightarrow} \underset{s+m}{\R}$ 

The composition $\tau_m \circ \widetilde{\omega_n}$ is the path that goes from $m$ and ends at $m+n$. And so now we can concatenate this with $\widetilde{\omega_m}$ to produce $\widetilde{\omega_m} \cdot (\tau_m \circ \widetilde{\omega_n})$; the path in $\R$ that goes from 0 to $m+n$. 

$
\begin{aligned}
[p \circ \widetilde{\omega_{m+n}}] 
 &= [p \circ (\widetilde{\omega_m} \cdot (\tau_m \circ \widetilde{\omega_n}))] \\
 &= [(p \circ \widetilde{\omega_m}) \cdot (p \circ (\tau_m \circ \widetilde{\omega_n}))] 
\end{aligned}
$

Now trivially $p \circ (\widetilde{\omega_m})=\omega_m$, but it is also the case that $p \circ (\tau_m \circ \widetilde{\omega_n})=\omega_n$. This is because the translation has no effect once we map the path on $\R$ down onto $S^1$.

$
\begin{aligned}
[(p \circ \widetilde{\omega_m}) \cdot (p \circ (\tau_m \circ \widetilde{\omega_n}))] 
 &= [w_m \cdot \omega_n] \\
 &= [w_m] \cdot [\omega_n] \\
 &= \Phi(m) \cdot \Phi(n) 
\end{aligned}
$

Thus $\Phi(m+n)=\Phi(m)\cdot\Phi(n)$ as desired. 

In the illustration that follows, observe how to aforementioned concatenation of paths/loops behaves as we would expect.