import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DSA.css';

const DSA = () => {
  const [activeTab, setActiveTab] = useState('beginner');

  const topics = {
    beginner: [
      {
        title: 'Arrays',
        description: 'Learn about one-dimensional and multi-dimensional arrays',
        concepts: ['Declaration', 'Initialization', 'Traversal', 'Basic operations'],
        resources: [
          { name: 'GeeksforGeeks Array Tutorial', url: 'https://www.geeksforgeeks.org/array-data-structure/' },
          { name: 'W3Schools Array Guide', url: 'https://www.w3schools.com/js/js_arrays.asp' }
        ]
      },
      {
        title: 'Strings',
        description: 'Understand string manipulation and operations',
        concepts: ['Concatenation', 'Substrings', 'Searching', 'Basic algorithms'],
        resources: [
          { name: 'String Handbook', url: 'https://www.hackerearth.com/practice/algorithms/string-algorithm/basics/tutorial/' }
        ]
      },
      {
        title: 'Basic Sorting',
        description: 'Introduction to simple sorting algorithms',
        concepts: ['Bubble Sort', 'Selection Sort', 'Insertion Sort'],
        resources: [
          { name: 'Sorting Visualizer', url: 'https://visualgo.net/en/sorting' }
        ]
      }
    ],
    intermediate: [
      {
        title: 'Linked Lists',
        description: 'Understand dynamic data structures',
        concepts: ['Singly Linked', 'Doubly Linked', 'Circular', 'Operations'],
        resources: [
          { name: 'Linked List Tutorial', url: 'https://www.geeksforgeeks.org/data-structures/linked-list/' }
        ]
      },
      {
        title: 'Stacks & Queues',
        description: 'Learn LIFO and FIFO structures',
        concepts: ['Implementations', 'Applications', 'Problems'],
        resources: [
          { name: 'Stack and Queue Guide', url: 'https://www.programiz.com/dsa/stack' }
        ]
      },
      {
        title: 'Trees',
        description: 'Hierarchical data structures',
        concepts: ['Binary Trees', 'BST', 'Traversals'],
        resources: [
          { name: 'Tree Visualizer', url: 'https://visualgo.net/en/bst' }
        ]
      }
    ],
    advanced: [
      {
        title: 'Graphs',
        description: 'Understand network structures',
        concepts: ['Representations', 'Traversals', 'Shortest Path', 'MST'],
        resources: [
          { name: 'Graph Theory Basics', url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' }
        ]
      },
      {
        title: 'Dynamic Programming',
        description: 'Solve complex problems efficiently',
        concepts: ['Memoization', 'Tabulation', 'Patterns'],
        resources: [
          { name: 'DP for Beginners', url: 'https://www.freecodecamp.org/news/demystifying-dynamic-programming-3efafb8d4296/' }
        ]
      },
      {
        title: 'Advanced Algorithms',
        description: 'Master complex problem solving',
        concepts: ['Dijkstra', 'Floyd-Warshall', 'KMP', 'Union-Find'],
        resources: [
          { name: 'Algorithm Design Manual', url: 'https://www.algorist.com/' }
        ]
      }
    ]
  };

  const learningPaths = {
    beginner: [
      'Understand time/space complexity basics',
      'Master array/string operations',
      'Solve 50+ easy problems on arrays/strings',
      'Implement basic sorting algorithms'
    ],
    intermediate: [
      'Implement all major data structures from scratch',
      'Solve 100+ medium difficulty problems',
      'Understand tree/graph traversals',
      'Master recursion and backtracking'
    ],
    advanced: [
      'Solve 50+ hard problems',
      'Master dynamic programming patterns',
      'Understand advanced graph algorithms',
      'Compete in coding contests'
    ]
  };

  return (
    <div className="dsa-page">
      {/* Hero Section */}
      <section className="dsa-hero text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Data Structures & Algorithms</h1>
          <p className="lead mb-4">
            Master the building blocks of efficient programming from basics to advanced concepts
          </p>
        </div>
      </section>

      {/* Level Selector */}
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="level-tabs nav nav-pills justify-content-center">
              <button
                className={`nav-link ${activeTab === 'beginner' ? 'active' : ''}`}
                onClick={() => setActiveTab('beginner')}
              >
                Beginner
              </button>
              <button
                className={`nav-link ${activeTab === 'intermediate' ? 'active' : ''}`}
                onClick={() => setActiveTab('intermediate')}
              >
                Intermediate
              </button>
              <button
                className={`nav-link ${activeTab === 'advanced' ? 'active' : ''}`}
                onClick={() => setActiveTab('advanced')}
              >
                Advanced
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container my-5 bg-dark p-4 rounded shadow">
        <div className="row">
          {/* Topics Section */}
          <div className="col-lg-8 mb-4 mb-lg-0">
            <h2 className="mb-4 text-center">Topics to Master</h2>
            <div className="row">
              {topics[activeTab].map((topic, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className="topic-card card h-100 shadow-sm">
                    <div className="card-body">
                      <h3 className="h5">{topic.title}</h3>
                      <p className="text-muted">{topic.description}</p>
                      
                      <div className="concepts mb-3">
                        <h6 className="mb-2">Key Concepts:</h6>
                        <div className="d-flex flex-wrap gap-2">
                          {topic.concepts.map((concept, i) => (
                            <span key={i} className="badge bg-light text-dark">{concept}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="resources">
                        <h6 className="mb-2">Resources:</h6>
                        <ul className="list-unstyled">
                          {topic.resources.map((resource, i) => (
                            <li key={i}>
                              <a 
                                href={resource.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                              >
                                <i className="bi bi-link-45deg me-1"></i>
                                {resource.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer bg-transparent">
                      <button className="btn btn-sm btn-outline-primary">
                        Practice Problems <i className="bi bi-arrow-right ms-1"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Path */}
          <div className="col-lg-4">
            <div className="learning-path-card card shadow-sm h-100">
              <div className="card-body">
                <h2 className="mb-4 text-center">Learning Path</h2>
                <ol className="list-group list-group-numbered">
                  {learningPaths[activeTab].map((step, index) => (
                    <li key={index} className="list-group-item border-0">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="card-footer bg-transparent text-center">
                <button className="btn btn-primary">
                  Download Full Roadmap <i className="bi bi-download ms-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Section */}
      <section className="practice-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Practice Platforms</h2>
          <div className="row justify-content-center">
            {[
              {
                name: 'LeetCode',
                description: 'Practice coding interview questions',
                url: 'https://leetcode.com/',
                icon: 'bi-code-square'
              },
              {
                name: 'HackerRank',
                description: 'Solve challenges across domains',
                url: 'https://www.hackerrank.com/',
                icon: 'bi-trophy'
              },
              {
                name: 'Codeforces',
                description: 'Competitive programming contests',
                url: 'https://codeforces.com/',
                icon: 'bi-graph-up'
              }
            ].map((platform, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="platform-card card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <i className={`bi ${platform.icon} platform-icon mb-3`}></i>
                    <h3 className="h5">{platform.name}</h3>
                    <p className="text-muted">{platform.description}</p>
                    <a 
                      href={platform.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Visit Platform
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DSA;