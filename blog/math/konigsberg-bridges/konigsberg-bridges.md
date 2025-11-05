# The Seven Bridges of Königsberg

**Date:** November 02, 2025
**Category:** Math

The "Seven Bridges of Königsberg" is a classic problem in mathematics that is widely considered to be the origin of graph theory.

### The Problem

In the 18th century, the city of Königsberg, Prussia (now Kaliningrad, Russia) was set on the Pregel River. It included two large islands that were connected to each other and to the mainland by seven bridges.

![A map of the Königsberg bridges](../konigsberg-map.png)
*Image by [BoH](https://commons.wikimedia.org/wiki/User:BoH), via Wikimedia Commons, licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en).*

The puzzle was: **Can a person walk through the city in a way that crosses each of the seven bridges exactly once?**

*(This is an image placeholder. You need to place an image named `konigsberg-map.png` into a `blog/images/` folder.)*

### Euler's Insight: The Birth of Graph Theory

The great mathematician Leonhard Euler solved this problem in 1736. His key insight was to realize that the *specific path* taken on the landmasses didn't matter, only the *connections* between them.

He abstracted the problem:
1.  He represented each of the four landmasses (the two riverbanks and the two islands) as a **node** (or **vertex**).
2.  He represented each of the seven bridges as an **edge** connecting the nodes.

The problem was then simplified to: **Can you draw this graph without lifting your pen, tracing each edge exactly once?** This is what we now call an **Eulerian Path**.

### The Solution

Euler proved that such a path is only possible if the graph has **zero or exactly two** nodes of "odd degree" (a node with an odd number of edges connected to it).

The Königsberg graph has **four** nodes of odd degree (one has 5 edges, and the other three have 3 edges).

Therefore, Euler proved, it is **impossible** to walk the city, crossing each bridge exactly once.

This idea of representing a problem as a set of nodes and edges was the foundation of **Graph Theory**, which is a core part of the discrete mathematics I study today.