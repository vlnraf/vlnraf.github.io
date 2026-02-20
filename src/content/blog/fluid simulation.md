---
title: "Simulation that tries to mimic the physical fluid behaviour"
description: ""
pubDate: 2025-02-20
draft: true
---


## Introduction
To begin I tell you that I am not a physicist or a mathematician, I am a simple guy who loves those arguments and love computers, that is why i took this as a challenge and tried to understand and implement how fluid behave in our physical word and tried to simulate it, so don't take everything i will tell you as a truth, but more likely take them as a startingg point to study it better if you are interested in the field.
I will reference all the materials i have studied in order to achieve a conceptual idea of how to compute a simulation of a fluid.

Let's start with the equations of fluids, it is a famous equation which is called *the incompressible Navier-strokes equation*, which are a set of differential equation that are supposed to be true throughout the fluid.

$$
\frac{\partial \vec{u}}{\partial t} = - \vec{u} \cdot \nabla\vec{u} + \frac{1}{\rho}\nabla p + \vec{g} + \nu\nabla \cdot \nabla\vec{u}
$$
$$
\nabla \cdot \vec{u} = 0 
$$

Thse may appear really complicated (they appear complicated even now to me). But let's try to understand them better and what they are trying to express.

Let's start with the first equation before talking about the second one.
The first equation as we can see is a partial derivative of the velocity respect to the time and tells us that this partial derivative is equal something. Before passing to the right hand side of the equation i wan't to point out that the partial derivative of the velocity vector respect to the time is the same thing as accelleration as we study also in basic physics classes. So we can rewrite the equation as 
$$
a = - \vec{u} \cdot \nabla\vec{u} + \frac{1}{\rho}\nabla p + \vec{g} + \nu\nabla \cdot \nabla\vec{u} 
$$
where a is the acceleration of the fluid.
Now we try to decompose the right hand side of the equation which is more complicated, but let's start by separating each term because as we can see they are nothing more than a sum of forces. Let's start with the most simple force that we see which is the term $\vec{g}$, even this one as we know from basic physic class is the gravity acceleration and on our planet is approximally equal to $-9.8 \frac{m}{s^2}$.
Now we have 3 other terms the first one which is $- \vec{u} \cdot \nabla\vec{u}$ also called the convective term, we turn back on it later, then we have $+ \frac{1}{\rho}\nabla p $ which is the gradient of the pressure field over the density of the fluid. and finally we have a the viscosity term $\nu\nabla \cdot \nabla\vec{u}$, which dictate as the name says the viscosity of the fluid. Now take care that here the letter $\nu$ doesn't stand to represent the velocity, the velocity is represented by the vector $\vec{u}$, instead $\nu$ represent the kinematic viscosity. I wan't get deeper here on how this is nothing more that the famous momentum equation $F = ma$, but if you wan't to go deeper on this you can take a look at the book *Fluid Simulation for Computer Graphics by Robert Bridson*[^1]

Let's pass to the second equation which enforce incompressibility of the fluid. In real worl even fluid are compressible, but theyr change in volume is so small that we approximate them as incompressible here. Also because the *Navier-strokes equation* for complessible fluids are another monster set of equations. Even more in the simulation application and code i will provide i have also dropped the viscosity term (I plan to implement also it in future), and i also dropped out the gravity acceleration because the simulation is in 2d and instead of gravity force i have added other kind of forces like wind forces, to simulate a wind tunnel. So our final set of equation to compute will be
$$
\frac{\partial \vec{u}}{\partial t} = - \vec{u} \cdot \nabla\vec{u} + \frac{1}{\rho}\nabla p + F
$$
$$
\nabla \cdot \vec{u} = 0 
$$

## Lagrangian vs Euler methods
A brief discussion about the Lagrangian method and the Eulerian method (the one used for this simulation). The lagrangian approach is probably the one who everyone is most used to see, it describes a fluid like a particle system, where aech point in the fluid is described as a single particle that has a position and a velocity that evolves over time. Instead the Euler method is a bit different, this time we define the fluid a whole thing and instead of calculate the position and next position of each particle we sample the fluid at fixed points and see how every "quantity" evolve over time, so we measure how velocity on this point evolve, the pressure and so on.
## Boundary Conditions
Like all PDEs, Navier-Stokes requires an initial condition (the starting state of the fluid) and boundary conditions (what happens at the edges of the domain) to have a well-defined solution. I won't go over this for two reasons, first of all I am probably not the right person to explain you how differential equations work and also because it would take too much time to explain them. But as before I encourage you to at least try to understand the basic concepts of multivariable calculus in order to have a better understanding of the subject, you can use every resource you want, I have seen some Khan Academy videos and I think they are really good to touch the topic [^2]. To give you an intuition of why we need those things, let's think about your normal calculus class that i think everyone has attempted. A differential equation is nothing more then a derivative of a function and to solve it we wan't to find this function, from what we know to find the function that describe a derivative we need to integrate the derivative, because the integral is the antiderivative from the first foundamenta calculus theorem. But when we integrate the derivative of a function if you remember we don't find an exact function we find a set of functions and everyone of this function is a possible solution.
Do you remember the "famous" constant term that we add at the end of the solution given by integratin a function?$\int 2x dx = x^2 + C$, we know now that this set of functions with C as every constant is a solution to this intergal.

Sorry if i taken too much time to explain it, but i hope that is clear. Passing now to the boundary condition, you can assume


## Conclusions and Result
## References 
[^1]: Bridson, R. (2015). *Fluid Simulation for Computer Graphics* (2nd ed.). CRC Press.
[^2]: https://www.youtube.com/watch?v=TrcCbdWwCBc&list=PLSQl0a2vh4HC5feHa6Rc5c0wbRTx56nF7