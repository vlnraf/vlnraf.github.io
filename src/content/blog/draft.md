---
title: "Game Engine Series"
description: "Game Engine architecture"
pubDate: 2024-12-18
draft: true
---


## Inspiration

I've always enjoyed reading and wathing dev logs of other persons. Reading and seeing how they tackle problems, the thought process they follow, and the solutions they come up with is inspiring. They're a straordinary resources to learn new techniques and perspectives that would be hard to learn on your own. That's is one of the reason why i am making those dev logs.

Another reason is that I want to create a kind of archive for myself a place to document the problems I encounter and the solutions I come up with. It’ll be useful to look back on later, and hey, it might even look good on my resume if I need to apply for a job someday.

I was undecided if make text based dev logs or Video that are super popular right now, but i ended up with a text approach. They are "less time driven" to do respect to a video in my opinion. I’m also working on this project in my free time, and I still need to balance it with other non-computer-related activities to keep my mental health in check.

## Background

I started watching people create these amazing games as solo developers, like Jonahan Blow with _braid_, Mathias linda with _Chaned Echoes_, and most recently Billy Basso with _Animal Well_.

I have always been fascinated on how computer works and I've always dreamed of making one of those beautiful games that kept me hooked for hours and hours, exploring those amazing words and secrets inside them. If you think about it's mind-blowing to see an entire different world, simulated inside a box full of electrical componets, brought to life on a screen for us to explore. 

I am currently working another job, so i start this project and working on it in my free time. But the desire to bring alive something of my own to life is so strong that i couldn't resist diving in. To be honest I've tried making games on my own before, but i always ended up giving up for a tons of reasons. Most of the time, it just felt overwhelming, there's so much to learn, from basic stuffs to more advanced, and trying to handle it all lone is really tough.

One of my biggest challenges (and still is) is my perfectionism mindset. Not in the sense that everything I create is perfect, but in the sense that I feel like everything I want to create has to be the best out there. Over time, I've worked on this and I resigned myself to the fact that I will never do the best thing out there without investing my time and energies. There is no magic shortcur that instantly gives you all the knowladge you need in short time. Instead it is a continouous reserach on things that you need in order to achieve your goal.

With that mindset, I started this project. And if you are wondering why I don't just use a prebuilded game engine like Unity, Godot or even Unreal engine, the decision is purely personal, so don't follow my path if your only goal is to do a game.

The reason is that I tried to use those engines, but the workflow is boring to me. In the sense that I don't like to use other tools without knowing which is behind those tools, I don't like thinking of these engines as "magic". I have understood over time that there is no magic in any tool library or framework we are using. It's just simple code that other peoples have written for you. Now think about it, what happens if you need something that no one has done yet or simply your framework doesn't have? Do you give up and wait that someone does the job for you or try to search a solution and implement it by yourself? I am the second type of person or at least I try to be. To do that, I feel the need to get my hands-on and develop most of the things that i need.

So to summarize I am doing this to learn. I'm conscious that my tools will never be at the level of Unity or other engines out there, but those tools will be mine. I'll know where to look if somethings goes wrong, and I learn along the path all the fantastic things that are behind the scenes.

At this point I have already started developing my engine, so I know there will be times when it's painfull, when I can't find a solution that fits my problem. 
But honestly? I kind of enjoy it (maybe I've got a problem, who knows). To me, programming and also optimizing fells like playing a game. There's this sense of gamification in the process. Think about it: when you're trying to optimize your code to reduce the execution time, you're chasing numbers that go down, and when they finally start decreasing, it feels like a reward. The same thing heppens when you implement something that you would never expect to implement all by yourself.

## Decisions

This is probably the hardest part of developing a game or even life in general. There are so many choices out there, and none of them are universally "better", than the others. You just have to pick the one that fits you best. But it's not always that simple. When you're faced with all these decisions, it's easy to doubt yourself and feel like you're doing everything wrong. That doubt can lead you to scrap everything and start over from scracth.

My approach is to keep it simple, start with basics and abstract things only when needed. If you're like me and trying to do something that you've never done before, my advice is that it's impossible to know everything before starting and if you try that you will end up without makinig nothing for a long time and probably give up before even start. Instead, jsut dive in, program like you just learned yesterday. Put everything in the "main" function if you have to. Experiment with you solutions and test them out. Once you're satisfied with ohw something works, you can refactor and abstract away the repetitive parts. Progress is better than perfection.

I choosen to do a 2D engine mainly for simplicity. It's not that I'm afraid of making a 3D engine, but I prefer to start with the basics, as I mentioned earlier. Besides, even 3D engines have 2D components, like UI elements.

These days, 2D and 3D are often mixed together, especially in modern games. A greate example is the new HD-2d style used in games like _Octopath Traveler_ or the _Dragon Quest 3 remake_.
It’s a fantastic blend of both worlds, and it shows how much value 2D still has even in a 3D-driven era.

### Language
The choosen language is C, I really like its simplicity, but sometimes it lacks of features for which I'm used to, like operator overloading, function overloading and so on. So, while I try to keep the code as much similar to C as possible, there are times when I'll use C++ features.

But i am not there to tell you wich language is better. If you want to make you own project just choice the language that you mostly like. After all, it’s just a tool.


### Libraries
I'm aiming to use as less libraries as possible as I said, I like to write my things and having full control over it, but some of them are boring atleast for me. That said, sometimes it's necessary and so I'll list there the library dependency of the project and the thinking process that made me take those decisions.

The first "boring" part for which I end up using GLFW is the platform-specific stuff. If you want to ship your project on multiple platforms, you have to deal with the different operating systems, Windows, Linux and MacOS and there is no fun to me in writing the same thing for each system with it's own API. GLFW helps solve this by providing a way to write an application that works across all these platforms.

I also introduces the dependency to _stb_image_ a library to handle image file loadings. Again, it's the same situation there is no fun in writing a different loader for each image format out there.

Lastly, I'm also using the C++ standard library, but in this case my goal is to get rid of this.

### Graphics API
Let's say I don't have much experience with none of those APIs, and platform-specific API like DirectX and Metal were out of discussion. The reason is like stated before if would have choosen DirectX, then the application would only work on Windows and I'd have to make all other platform Graphic Api layers for other systems. 

The decision was between Vulkan and Opengl. From what i know Opengl is much simpler compared to Vulkan, so I decided to stick with it for now. Later, once I have enough experience, I can always switch to vulkan.

### Build tool
This is probably the worst thing about C and C++, there are so many building tools out there, with a lot of choices, but I haven't yet found the one with that I'm truly comofortable with.
They all seem pretty complicated. Even though I'm working on Windows I've choosen Makefiles as my building tool. In my opinion it's verbose and you have to specify everything by yourself, but it's the one I feel most comfortable with for now. I'm not sure if in the future I'll swap to a better, more multiplatform-friendly building tool.

## Overview
This first dev log will cover high level stuffs, and in upcoming ones, I'll dive deeper into each component of my engine. I'm not starting the project at the same time I'm writing this dev log, I have already worked a bit on it, so I've made an initial structure to the project. Now probably those design choices might not be the best ones and probably I will change them in future, but right now that is what i have.

![Engine Architecture](/public/first-devlog/Engine-Architecture.png "Engine Architecture")

the picture above [Engine Architecture](/public/first-devlog/Engine-Architecture.png), is the high-level architecure of the engine, it is divided in

#### Core
The core library wich has basic tools for the engine and is compiled as a static library, used by the Renderer and the Game Kit

#### Renderer
Which is an opengl based renderer and provides right now basic funcionality like ortographic camera a simple scene manager, textures and the possibility to draw Quads, in order to display sprites, animations and so on

#### Game kit
Which is a dynamic linked library where i will put each tool i will need to develop my game, it's not part of the core because i think those tools will not be used in every game, so it's like a framework that provides functionality to make game development easier, right now i have implemented a tilemap manager an animation manager and an ECS.

#### Game
This is another dll attached to the application who will provide renderer and core functionality and is also linked to the Game Kit which is a middle layer that provides tools for game development.


This isn't the final architecture, because sometimes during the developing process I tend to rethink and update the design. The main reason I decided to make the Game as a DLL is to implement the hot reload feature. This allows the application to watch the game DLL file and update it's state whenever it changes.

This approach makes working on the game much easier because I'm not forced to recompile everything each time I do a minor change in the game. 
Instead I can just compile only the game while the application is running, and then the application will reload the game without shutting it down. In the picture below i represented the flow of the project and the interaction between the components

![Engine Flow](/public/first-devlog/Engine-Flow.png "Engine Architecture")

## Conclusions and Result

Probably that was only a lot of boring text, but I wanted to give an idea of the current state of the engine. In future posts, i'll dive into the main components of the engine and explain them one by one with code and visual things.

To give you an idea of what i have done right now there is a simple video

<video controls>
  <source src="/public/first-devlog/Demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Useful Resources
Here i list some useful resources i have found in the web and also the assets used in the demo
Assets:
- https://otterisk.itch.io/hana-caraka-base-character
- https://opengameart.org/content/shootem-up-graphic-kit

Resources:
- https://learnopengl.com/Introduction
- https://medium.com/@savas/nomad-game-engine-part-4-3-aos-vs-soa-storage-5bec879aa38c
- https://caseymuratori.com/blog_0015
- https://caseymuratori.com/blog_0029
- https://www.youtube.com/watch?v=Ge3aKEmZcqY&list=LL&index=9&t=7013s
- https://www.gameenginebook.com/
- https://www.youtube.com/watch?v=teg23SJlyl8&list=PLv8Ddw9K0JPg1BEO-RS-0MYs423cvLVtj&index=3
- https://www.youtube.com/watch?v=Eb4-0M2a9xE&list=LL&index=9
- https://www.youtube.com/watch?v=aKLntZcp27M&t=1967s