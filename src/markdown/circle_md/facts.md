It remains to show $\Phi$ is bijective. But before we do so, it would be helpful to introduce two important facts about covering maps.

### 1: Uniquely Lifted loops

Firstly, every loop on $S^1$ has a unique lift onto $\R$ as soon as you fix the basepoint $\widetilde{x_0}$ in $\R$. 

If $f: I \to S^1$ s.t. $f(0)=x_0$ and $\widetilde{x_0} \in p^{-1}(x_0)$

Then there is a unique $\tilde{f}: I \to \R$ s.t. $\tilde{f}(0) = \widetilde{x_0}$

### 2: Uniquely lifted homotopies

The same can be said for homotopies

If $F: I \times I \to S^1$ s.t. $F(0,t)=x_0$ and $\widetilde{x_0} \in p^{-1}(x_0)$

Then there is a unique $\tilde{F}: I \times I \to \R$ s.t. $\tilde{F}(0,t) = \widetilde{x_0}$

## $\Phi$ is bijective

Now let us build on these facts to show $\Phi$ is bijective, and thus a group isomophism.

### Surjectivity

Recall $\Phi$ is surjective if

$\exists n \in \Z$ s.t. $\Phi(n)=[\omega_n]$

Suppose

$[f] \in \pi_1(S^1,x_0)$

Then by fact 1, there is a unique lift

$\tilde{f}: I \to \R$ s.t. $\tilde{f}(0) = \widetilde{x_0}$

once we fix $\widetilde{x_0}=0$

The covermap gives $p \circ \tilde{f} = f$ 

And analagously $p \circ \tilde{f}(1) = f(1) = x_0$

And therefore $\tilde{f}(1) \in p^{-1}(x_0)$

Now since $p^{-1}(x_0) = \Z$

$\tilde{f}(1) \in \Z$ and $\tilde{f}(1) = n$ for some $n \in \Z$

Now trivially

$
\begin{aligned}
\tilde{f} &\simeq \widetilde{\omega_n} \\
p \circ \tilde{f} &\simeq p \circ \widetilde{\omega_n} \\
f &\simeq \omega_n \\
[f] &= [\omega_n] \\
[f] &= \Phi(n) \\
\end{aligned}
$

Thus, since $[f]$ is in the image of $\Phi(n)$ for some $n\in \Z$, $\Phi$ is surjective.

### Injectivity

Recall $\Phi$ is injective if

$\Phi(m)=\Phi(n) \implies m=n$ , $\forall m,n \in \Z$

Suppose $\Phi(m)=\Phi(n)$

Then $[\omega_m] = [\omega_n]$

And so $\omega_m \simeq \omega_n $by some homotopy $F: I \times I \to S^1$ such that

$
\begin{aligned}
F(s,0) &= \omega_m \\
F(s,1) &= \omega_n
\end{aligned}
$

Now by fact 2, there is a unique lift

$\tilde{F}: I \times I \to \R$ s.t. $\tilde{F}(0,t) = \widetilde{x_0}$

once we fix $\widetilde{x_0}=0$

Well this implies $\tilde{F}$ is a path homotopy between $\widetilde{\omega_m}$ and $\widetilde{\omega_n}$.

And since homotopies fix endpoints, $\tilde{F}$ tells us $\widetilde{\omega_m}$ and $\widetilde{\omega_n}$ must start at end at 
the same points on $\R$.

$
\begin{aligned}
\tilde{F}(1,t)&=\tilde{F}(1,0)=m \\
&= \tilde{F}(1,1)=n
\end{aligned}
$

Thus, since $\Phi(m)=\Phi(n) \implies m=n$, $\Phi$ is injective.