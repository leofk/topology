
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

By definition, $\Phi(m+n)=[\omega_{m+n}]$

which from before we know can be rewritten $[\omega_{m+n}] = [p \circ \widetilde{\omega_{m+n}}]$

Now we know $\widetilde{\omega_{m+n}}$ the path in $\R$ that goes from 0 to $m+n$.

Well we can rewrite this in terms of $\widetilde{\omega_m}$ which and $\widetilde{\omega_n}$ by concatenating them, but we need to make a slight modification so the endpoints agree.

Let $\tau_m$ be a translation by $m$.

$\tau_m:\underset{s}{\R} \underset{\mapsto}{\to} \underset{s+m}{\R}$ 

Then the composition $\tau_m \circ \widetilde{\omega_n}$ is the path that goes from $m$ and ends at $m+n$. And now we can concatenate this with $\widetilde{\omega_m}$ as follows $\widetilde{\omega_m} \cdot (\tau_m \circ \widetilde{\omega_n})$ which yields the path in $\R$ that goes from 0 to $m+n$.

So it follows 

$
\begin{aligned}
\Phi(m+n) &= [\omega_{m+n}] \\
&= [p \circ \widetilde{\omega_{m+n}}] \\
 &= [p \circ (\widetilde{\omega_m} \cdot (\tau_m \circ \widetilde{\omega_n}))] \\
 &= [(p \circ \widetilde{\omega_m}) \cdot (p \circ (\tau_m \circ \widetilde{\omega_n}))] \\
 &= [w_m \cdot \omega_n] \\
 &= [w_m] \cdot [\omega_n] \\
 &= \Phi(m) \cdot \Phi(n) \text{ ; as required} \\
\end{aligned}
$

Note that we can write $\omega_n = (p \circ (\tau_m \circ \widetilde{\omega_n}))$ since the translation has no effect once we map the path on $\R$ down onto $S^1$.
