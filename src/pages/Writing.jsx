// src/pages/Writing.jsx
import React, { useCallback, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import FloatingMenu from '../components/FloatingMenu';

const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: '🌱 Seed', level: 'seed', content: 'Raw ideas, questions, curiosities', parent: null },
    style: {
      background: '#ecfdf5',
      color: '#065f46',
      padding: 12,
      borderRadius: 12,
      border: '2px solid #10b981',
      fontWeight: 'bold',
    },
  },
  {
    id: '2',
    position: { x: 250, y: 100 },
    data: { label: '🌿 Bud', level: 'bud', content: 'Work in progress, early research', parent: '1' },
    style: {
      background: '#fefce8',
      color: '#92400e',
      padding: 12,
      borderRadius: 12,
      border: '2px solid #f59e0b',
      fontWeight: 'bold',
    },
  },
  {
    id: '3',
    position: { x: 500, y: 0 },
    data: { label: '🌺 Bloom', level: 'bloom', content: 'Final insights, published notes', parent: '2' },
    style: {
      background: '#fce7f3',
      color: '#9d174d',
      padding: 12,
      borderRadius: 12,
      border: '2px solid #ec4899',
      fontWeight: 'bold',
    },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#10b981' }, markerEnd: { type: MarkerType.Arrow } },
  { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#f59e0b' }, markerEnd: { type: MarkerType.Arrow } },
];

let nodeId = 4;

export default function Writing() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            animated: true,
            style: { stroke: '#6366f1' },
            markerEnd: { type: MarkerType.Arrow },
          },
          eds
        )
      ),
    [setEdges]
  );

  const onNodeClick = (_, node) => {
    setSelectedNode(node);
    centerViewOnNode(node);
  };

  const centerViewOnNode = (node) => {
    const { x, y } = node.position;
    const viewport = document.querySelector('.react-flow__viewport');
    if (viewport) {
      viewport.scrollTo({
        top: y - window.innerHeight / 2 + 100,
        left: x - window.innerWidth / 2 + 100,
        behavior: 'smooth',
      });
    }
  };

  const addChildNode = () => {
    if (!selectedNode) return;
    const level = selectedNode.data.level;
    const levels = {
      seed: { next: 'bud', emoji: '🌿', color: '#f59e0b', bg: '#fefce8', text: '#92400e' },
      bud: { next: 'bloom', emoji: '🌺', color: '#ec4899', bg: '#fce7f3', text: '#9d174d' },
      bloom: { next: 'seed', emoji: '🌱', color: '#10b981', bg: '#ecfdf5', text: '#065f46' },
    };

    const next = levels[level];
    const newNode = {
      id: `${nodeId}`,
      position: { x: selectedNode.position.x + 200, y: selectedNode.position.y + 100 },
      data: {
        label: `${next.emoji} ${next.next.charAt(0).toUpperCase() + next.next.slice(1)}`,
        level: next.next,
        content: '',
        parent: selectedNode.id,
      },
      style: {
        background: next.bg,
        color: next.text,
        padding: 12,
        borderRadius: 12,
        border: `2px solid ${next.color}`,
        fontWeight: 'bold',
      },
    };
    nodeId++;
    setNodes((nds) => [...nds, newNode]);
    setEdges((eds) => [
      ...eds,
      {
        id: `e${selectedNode.id}-${newNode.id}`,
        source: selectedNode.id,
        target: newNode.id,
        animated: true,
        style: { stroke: next.color },
        markerEnd: { type: MarkerType.Arrow },
      },
    ]);
  };

  const handleLabelChange = (e) => {
    setSelectedNode({ ...selectedNode, data: { ...selectedNode.data, label: e.target.value } });
    setNodes((prev) =>
      prev.map((node) =>
        node.id === selectedNode.id ? { ...node, data: { ...node.data, label: e.target.value } } : node
      )
    );
  };

  const handleContentChange = (e) => {
    setSelectedNode({ ...selectedNode, data: { ...selectedNode.data, content: e.target.value } });
    setNodes((prev) =>
      prev.map((node) =>
        node.id === selectedNode.id ? { ...node, data: { ...node.data, content: e.target.value } } : node
      )
    );
  };

  return (
    <div className="flex w-full h-screen">
      <div className="flex-1 relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background color="#f3f4f6" gap={16} />
        </ReactFlow>

        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <button
            onClick={addChildNode}
            className="px-3 py-1 bg-indigo-500 text-white text-sm rounded shadow hover:bg-indigo-600"
          >
            + Add Child
          </button>
        </div>
      </div>

      {/* Side panel */}
      <div className="w-80 bg-white border-l border-gray-300 p-4 text-gray-900">
        {selectedNode ? (
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Label</label>
              <input
                value={selectedNode.data.label}
                onChange={handleLabelChange}
                className="w-full p-2 text-sm rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Content</label>
              <textarea
                value={selectedNode.data.content}
                onChange={handleContentChange}
                className="w-full p-2 text-sm rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                rows={4}
              />
            </div>
          </div>
        ) : (
          <div className="text-sm text-gray-500">Click on a node to view or edit its details</div>
        )}
      </div>
      <FloatingMenu />
    </div>
  );
}
