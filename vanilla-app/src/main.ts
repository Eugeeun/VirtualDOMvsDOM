interface Post {
  id: number;
  title: string;
  content: string;
}

class MassivePostList {
  private posts: Post[] = [];
  private container: HTMLElement;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId) as HTMLElement;
    this.generatePosts();
    this.render();
    this.startRandomSwapping();
  }

  private generatePosts() {
    this.posts = Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      title: `Post ${i + 1}`,
      content: `This is the content of post ${i + 1}`,
    }));
  }

  private render() {
    this.container.innerHTML = `
      <h2>Massive Post List (1000 posts)</h2>
      ${this.posts
        .map(
          post => `
        <div data-id="${post.id}">
          <h3>${post.title}</h3>
          <p>${post.content}</p>
        </div>
      `
        )
        .join("")}
    `;
  }

  private startRandomSwapping() {
    setInterval(() => {
      const index1 = Math.floor(Math.random() * this.posts.length);
      let index2 = Math.floor(Math.random() * this.posts.length);
      while (index2 === index1) {
        index2 = Math.floor(Math.random() * this.posts.length);
      }

      // Swap posts in the array
      [this.posts[index1], this.posts[index2]] = [this.posts[index2], this.posts[index1]];

      // Update the DOM
      const element1 = this.container.querySelector(
        `[data-id="${this.posts[index1].id}"]`
      ) as HTMLElement;
      const element2 = this.container.querySelector(
        `[data-id="${this.posts[index2].id}"]`
      ) as HTMLElement;

      if (element1 && element2) {
        element1.innerHTML = `
          <h3>${this.posts[index1].title}!</h3>
          <p>${this.posts[index1].content}</p>
        `;
        element2.innerHTML = `
          <h3>${this.posts[index2].title}@</h3>
          <p>${this.posts[index2].content}</p>
        `;
      }
    }, 10); // 10ms interval
  }
}

// Usage
document.addEventListener("DOMContentLoaded", () => {
  new MassivePostList("massive-post-list");
});

interface Comment {
  id: number;
  postId: number;
  text: string;
}

class RealtimeComments {
  private comments: Comment[] = [];
  private commentsContainer: HTMLElement;
  private form: HTMLFormElement;
  private input: HTMLInputElement;

  constructor(containerId: string) {
    this.form = document.createElement("form");
    this.input = document.createElement("input");
    this.commentsContainer = document.getElementById(containerId) as HTMLElement;
    this.createForm();
    this.render();
    this.startRealtimeSimulation();
  }

  private createForm() {
    this.form = document.createElement("form");
    this.input = document.createElement("input");
    const submitButton = document.createElement("button");

    this.input.type = "text";
    this.input.placeholder = "Add a comment";
    submitButton.textContent = "Submit";

    this.form.appendChild(this.input);
    this.form.appendChild(submitButton);

    this.form.addEventListener("submit", this.handleSubmit.bind(this));

    this.commentsContainer.appendChild(this.form);
  }

  private handleSubmit(e: Event) {
    e.preventDefault();
    const newCommentText = this.input.value.trim();
    if (newCommentText) {
      const comment: Comment = {
        id: Date.now(),
        postId: 1,
        text: newCommentText,
      };
      this.comments.push(comment);
      this.input.value = "";
      this.render();
    }
  }

  private startRealtimeSimulation() {
    setInterval(() => {
      const randomComment: Comment = {
        id: Date.now(),
        postId: 1,
        text: `Random comment ${Math.random().toString(36).substring(7)}`,
      };
      this.comments.push(randomComment);
      this.render();
    }, 1000);
  }

  private render() {
    const commentsHtml = this.comments
      .map(comment => `<p data-id="${comment.id}">${comment.text}</p>`)
      .join("");

    const commentsElement = document.createElement("div");
    commentsElement.innerHTML = commentsHtml;

    // Clear previous comments and append new ones
    while (this.commentsContainer.lastChild !== this.form) {
      this.commentsContainer.removeChild(this.commentsContainer.lastChild!);
    }
    this.commentsContainer.appendChild(commentsElement);
  }
}

// Usage
document.addEventListener("DOMContentLoaded", () => {
  new RealtimeComments("comments-container");
});

interface Post {
  id: number;
  title: string;
  content: string;
}

class FilterablePosts {
  private posts: Post[];
  private filteredPosts: Post[];
  private container: HTMLElement;
  private input: HTMLInputElement;
  private postsContainer: HTMLElement;

  constructor(containerId: string) {
    this.input = document.createElement("input");
    this.postsContainer = document.createElement("div");
    this.container = document.getElementById(containerId) as HTMLElement;
    this.posts = this.generatePosts();
    this.filteredPosts = [...this.posts];
    this.render();
    this.setupEventListeners();
  }

  private generatePosts(): Post[] {
    return Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      title: `Post ${i + 1}`,
      content: `Content ${i + 1}`,
    }));
  }

  private render() {
    this.container.innerHTML = `
      <h2>Filterable Posts</h2>
      <input type="text" placeholder="Filter posts">
      <div id="posts-container"></div>
    `;
    this.input = this.container.querySelector("input") as HTMLInputElement;
    this.postsContainer = this.container.querySelector("#posts-container") as HTMLElement;
    this.renderPosts();
  }

  private renderPosts() {
    this.postsContainer.innerHTML = this.filteredPosts
      .map(
        post => `
      <div>
        <h3>${post.title}</h3>
        <p>${post.content}</p>
      </div>
    `
      )
      .join("");
  }

  private setupEventListeners() {
    this.input.addEventListener("input", () => {
      const filter = this.input.value.toLowerCase();
      this.filteredPosts = this.posts.filter(
        post =>
          post.title.toLowerCase().includes(filter) || post.content.toLowerCase().includes(filter)
      );
      this.renderPosts();
    });
  }
}

// Usage
document.addEventListener("DOMContentLoaded", () => {
  new FilterablePosts("filterable-posts");
});
