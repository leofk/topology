## Facts about Covering Spaces 

It remains to show $\Phi$ is bijective. However, before doing so, it would be helpful to introduce two key facts about covering maps.

### 1: Uniquely Lifted Loops

Firstly, every loop on $S^1$ has a unique lift onto $\R$ as soon as you fix the basepoint $\widetilde{x_0}$ in $\R$. 

If $f: I \to S^1$ s.t. $f(0)=x_0$ and $\widetilde{x_0} \in p^{-1}(x_0)$, then there is a unique $\tilde{f}: I \to \R$ s.t. $\tilde{f}(0) = \widetilde{x_0}$

### 2: Uniquely Lifted Homotopies

The same can be said for homotopies

If $F: I \times I \to S^1$ s.t. $F(0,t)=x_0$ and $\widetilde{x_0} \in p^{-1}(x_0)$, then there is a unique $\widetilde{F}: I \times I \to \R$ s.t. $\widetilde{F}(0,t) = \widetilde{x_0}$

## $\Phi$ is bijective

Now let us build on these facts to show $\Phi$ is bijective, and thus a group isomophism.

### Surjectivity

Recall that $\Phi$ is surjective if for every $[ \omega_n ] \in \pi_1(S^1, x_0)$, there exists an $n \in \mathbb{Z}$ such that $\Phi(n) = [ \omega_n ]$.

Suppose $[f] \in \pi_1(S^1, x_0)$. By Fact 1, there is a unique lift $\tilde{f}: I \to \mathbb{R}$ such that $\tilde{f}(0) = \widetilde{x_0}$ once we fix $\widetilde{x_0} = 0$.

The covering map gives $p \circ \tilde{f} = f$. And similarly, $p \circ \tilde{f}(1) = f(1) = x_0$, so $\tilde{f}(1) \in p^{-1}(x_0)$. Since $p^{-1}(x_0) = \mathbb{Z}$, we have $\tilde{f}(1) \in \mathbb{Z}$, and thus $\tilde{f}(1) = n$ for some $n \in \mathbb{Z}$. This tells us $\tilde{f}\simeq \widetilde{\omega_n}$ since it is a path in $\R$ that goes from $0$ to $n$. Thus trivally

$
\begin{aligned}
\tilde{f} &\simeq \widetilde{\omega_n} \\
p \circ \tilde{f} &\simeq p \circ \widetilde{\omega_n} \\
f &\simeq \omega_n \\
[f] &= [\omega_n] \\
[f] &= \Phi(n)
\end{aligned}
$

Thus, since $[f]$ is in the image of $\Phi(n)$ for some $n \in \mathbb{Z}$, $\Phi$ is surjective.

### Injectivity

Recall that $\Phi$ is injective if

$
\Phi(m) = \Phi(n) \implies m = n, \quad \forall m, n \in \mathbb{Z}.
$

Suppose $\Phi(m) = \Phi(n)$. Then $[ \omega_m ] = [ \omega_n ]$, which implies $\omega_m \simeq \omega_n$ by some homotopy $F: I \times I \to S^1$ such that

$
\begin{aligned}
F(s, 0) &= \omega_m \\
F(s, 1) &= \omega_n
\end{aligned}
$

By Fact 2, there is a unique lift $\widetilde{F}: I \times I \to \mathbb{R}$ such that $\widetilde{F}(0, t) = \widetilde{x_0}$ (once we fix $\widetilde{x_0} = 0$). This implies that $\widetilde{F}$ is a path homotopy between $\widetilde{\omega_m}$ and $\widetilde{\omega_n}$ and since homotopies fix endpoints, $\widetilde{F}$ shows that $\widetilde{\omega_m}$ and $\widetilde{\omega_n}$ must start and end at the same points on $\mathbb{R}$:

$
\begin{aligned}
\widetilde{F}(1, 0) &= m \\
\widetilde{F}(1, 1) &= n
\end{aligned}
$

Thus, $m = n$ when $\Phi(m) = \Phi(n)$ and so $\Phi$ is injective.

## Putting It All Together

Since we have demonstrated that $\Phi$ is both *surjective* and *injective*, it follows that $\Phi$ is *bijective*. Furthermore, because $\Phi$ is a *bijective homomorphism*, it is an *isomorphism*. Thus, we conclude that the fundamental group of the circle $S^1$ is isomorphic to the integers $\Z$.
