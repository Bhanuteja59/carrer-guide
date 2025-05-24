import React, { useState } from 'react';
import './Advanced.css';

function Advanced() {
  const [selectedDS, setSelectedDS] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('python');

  const dataStructures = [
    {
      name: 'Arrays',
      levels: ['Basic', 'Intermediate', 'Advanced'],
      complexity: {
        access: 'O(1)',
        search: 'O(n)',
        insertion: 'O(n)',
        deletion: 'O(n)'
      },
      applications: ['Database indexing', 'Matrix operations', 'Lookup tables']
    },
    {
      name: 'Linked Lists',
      levels: ['Singly', 'Doubly', 'Circular'],
      complexity: {
        access: 'O(n)',
        search: 'O(n)',
        insertion: 'O(1)',
        deletion: 'O(1)'
      },
      applications: ['Memory management', 'Undo functionality', 'Hash tables']
    },
    {
      name: 'Trees',
      levels: ['Binary', 'AVL', 'Red-Black', 'B-Trees'],
      complexity: {
        access: 'O(log n)',
        search: 'O(log n)',
        insertion: 'O(log n)',
        deletion: 'O(log n)'
      },
      applications: ['File systems', 'Database indexing', 'Network routing']
    },
    {
      name: 'Graphs',
      levels: ['Directed', 'Undirected', 'Weighted'],
      complexity: {
        access: 'O(1)',
        search: 'O(V+E)',
        insertion: 'O(1)',
        deletion: 'O(1)'
      },
      applications: ['Social networks', 'GPS navigation', 'Recommendation systems']
    },
    {
      name: 'Hash Tables',
      levels: ['Chaining', 'Open Addressing'],
      complexity: {
        access: 'O(1)',
        search: 'O(1)',
        insertion: 'O(1)',
        deletion: 'O(1)'
      },
      applications: ['Caching', 'Database indexing', 'Cryptography']
    },
    {
      name: 'Heaps',
      levels: ['Min-Heap', 'Max-Heap', 'Priority Queue'],
      complexity: {
        access: 'O(1)',
        search: 'O(n)',
        insertion: 'O(log n)',
        deletion: 'O(log n)'
      },
      applications: ['Scheduling', 'Graph algorithms', 'Median maintenance']
    }
  ];

  const languageImplementations = {
    python: {
      'Arrays': 'array = [1, 2, 3, 4]',
      'Linked Lists': `
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
      `,
      'Trees': `
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
      `,
      'Graphs': `
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F']
}
      `,
      'Hash Tables': 'hash_table = dict()',
      'Heaps': `
import heapq
heap = []
heapq.heappush(heap, 10)
      `
    },
    java: {
      'Arrays': 'int[] array = {1, 2, 3, 4};',
      'Linked Lists': `
class Node {
    int data;
    Node next;
    Node(int d) { data = d; }
}
      `,
      'Trees': `
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}
      `,
      'Graphs': `
Map<Integer, List<Integer>> graph = new HashMap<>();
graph.put(1, Arrays.asList(2, 3));
      `,
      'Hash Tables': 'Map<String, Integer> map = new HashMap<>();',
      'Heaps': `
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
      `
    },
    cpp: {
      'Arrays': 'int array[] = {1, 2, 3, 4};',
      'Linked Lists': `
struct Node {
    int data;
    Node* next;
};
      `,
      'Trees': `
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
};
      `,
      'Graphs': `
unordered_map<int, vector<int>> graph;
graph[1].push_back(2);
      `,
      'Hash Tables': 'unordered_map<string, int> hash_table;',
      'Heaps': `
priority_queue<int> max_heap;
      `
    },
    javascript: {
      'Arrays': 'const array = [1, 2, 3, 4];',
      'Linked Lists': `
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
      `,
      'Trees': `
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
      `,
      'Graphs': `
const graph = {
    A: ['B', 'C'],
    B: ['D', 'E']
};
      `,
      'Hash Tables': 'const map = new Map();',
      'Heaps': `
// No built-in heap in JavaScript
      `
    }
  };

  const learningPaths = {
    beginner: [
      'Understand basic operations',
      'Learn array/list implementations',
      'Simple traversal techniques'
    ],
    intermediate: [
      'Implement standard operations',
      'Solve LeetCode easy problems',
      'Understand time complexity'
    ],
    advanced: [
      'Optimize space complexity',
      'Solve LeetCode hard problems',
      'Implement custom variations'
    ]
  };

  const resources = [
    {
      name: 'VisualGo',
      url: 'https://visualgo.net/en',
      description: 'Visualizations of data structures and algorithms'
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/data-structures/',
      description: 'Detailed explanations with code samples'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/explore/learn/',
      description: 'Practice problems with solutions'
    },
    {
      name: 'CLRS Book',
      url: 'https://en.wikipedia.org/wiki/Introduction_to_Algorithms',
      description: 'The algorithm bible'
    }
  ];

  const handleViewDetails = (ds) => {
    setSelectedDS(ds);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDS(null);
  };

  return (
    <div className="advanced-page">

      <div className="advanced-page">
        {/* Hero Section */}
        <section className="advanced-hero text-center">
          <div className="container">
            <h1 className="display-4 fw-bold mb-3">Advanced Data Structures</h1>
            <p className="lead mb-4">
              Master the building blocks of efficient algorithms across multiple programming languages
            </p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-danger btn-lg">Start Learning</button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container my-5">
          {/* Data Structures Grid */}
          <section className="ds-grid mb-5">
            <h2 className="section-title text-center mb-5">Core Data Structures</h2>
            <div className="row">
              {dataStructures.map((ds, index) => (
                <div key={index} className="col-md-6 col-lg-4 mb-4">
                  <div className="ds-card card h-100 shadow-lg">
                    <div className="card-body">
                      <h3 className="h4">{ds.name}</h3>
                      <div className="levels mb-3">
                        {ds.levels.map((level, i) => (
                          <span key={i} className="badge bg-light text-dark me-1 mb-1">
                            {level}
                          </span>
                        ))}
                      </div>
                      <div className="complexity mb-3">
                        <h6 className="text-muted">Time Complexity:</h6>
                        <ul className="list-unstyled">
                          <li>Access: {ds.complexity.access}</li>
                          <li>Search: {ds.complexity.search}</li>
                          <li>Insertion: {ds.complexity.insertion}</li>
                          <li>Deletion: {ds.complexity.deletion}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer bg-transparent">
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleViewDetails(ds)}
                      >
                        Explore Implementation
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {showModal && selectedDS && (
          <div
            className="modal fade show"
            id="projectModal"
            tabIndex="-1"
            aria-labelledby="projectModalLabel"
            aria-hidden="true"
            style={{ display: 'block' }}
          >
            <div className="modal-dialog modal-dialog-scrollable modal-lg">
              <div className="modal-content rounded-3 shadow-lg">
                {/* Modal Header */}
                <div className="modal-header   text-white">
                  <h5 className="modal-title" id="projectModalLabel">
                    <strong>{selectedDS.name}</strong>
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-white"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  ></button>
                </div>

                {/* Modal Body */}
                <div className="modal-body">
                  {/* Key Information Section */}
                  <div className="mb-4">
                    <p><strong>Levels:</strong> {selectedDS.levels.join(', ')}</p>
                    <p><strong>Applications:</strong> {selectedDS.applications.join(', ')}</p>
                    <div className="complexity mb-3">
                      <h6 className="text-muted">Time Complexity:</h6>
                      <ul className="list-unstyled">
                        <li>Access: <span className="fw-bold">{selectedDS.complexity.access}</span></li>
                        <li>Search: <span className="fw-bold">{selectedDS.complexity.search}</span></li>
                        <li>Insertion: <span className="fw-bold">{selectedDS.complexity.insertion}</span></li>
                        <li>Deletion: <span className="fw-bold">{selectedDS.complexity.deletion}</span></li>
                      </ul>
                    </div>
                  </div>

                  {/* Language Dropdown Section */}
                  <div className="mb-4">
                    <label htmlFor="languageSelect" className="form-label">Select Language</label>
                    <select
                      id="languageSelect"
                      className="form-select"
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                    >
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                      <option value="cpp">C++</option>
                      <option value="javascript">JavaScript</option>
                    </select>
                  </div>

                  {/* Code Implementation Section */}
                  <div className="code-box mb-4">
                    <h6 className="text-primary">Language Implementation:</h6>
                    <pre className="bg-dark text-white p-3 rounded">
                      {languageImplementations[selectedLanguage][selectedDS.name]}
                    </pre>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={handleCloseModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Learning Path */}
      <section className="learning-path mb-5 bg-white p-5 rounded-4 shadow-sm">
  <h2 className="section-title text-center text-primary fw-bold mb-5">Progressive Learning Path</h2>
  <div className="row g-4">
    {Object.entries(learningPaths).map(([level, items]) => (
      <div key={level} className="col-md-4">
        <div className="card h-100 border-0 rounded-4 shadow-sm card learning-path-card h-100">
          <div className="card-body">
            <h5 className="card-title text-capitalize fw-semibold text-primary border-bottom pb-2 mb-3">
              {level}
            </h5>
            <ul className="list-unstyled">
              {items.map((item, i) => (
                <li key={i} className="mb-3 d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Resources Section */}
      <section className="resources-section mb-5 container">
        <h2 className="section-title text-center mb-5">Recommended Resources</h2>
        <div className="row g-4">
          {resources.map((resource, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4 ">
              <div className="card resource-card h-100 border-0 shadow-lg rounded-4">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary fw-bold mb-2">{resource.name}</h5>
                  <p className="card-text text-muted flex-grow-1">{resource.description}</p>
                </div>
                <div className="card-footer bg-transparent border-0 text-end">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-danger btn-sm rounded-pill"
                  >
                    Visit Resource
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Advanced;