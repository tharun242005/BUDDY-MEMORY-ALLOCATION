import React, { useState } from 'react';
import './SimulationContent.css';

function BuddySimulation() {
  const [memorySize, setMemorySize] = useState('');
  const [freeList, setFreeList] = useState([]);
  const [allocList, setAllocList] = useState([]);
  const [requestSize, setRequestSize] = useState('');
  const [deallocId, setDeallocId] = useState('');

  const allocSound = new Audio('/alloc.mp3');
  const freeSound = new Audio('/free.mp3');

  const getBuddyAddress = (addr, size) => addr ^ size;

  const initializeMemory = () => {
    const size = parseInt(memorySize);
    if (!size || size <= 0) return;
    setFreeList([{ size: size, address: 0 }]);
    setAllocList([]);
  };

  const allocateBlock = () => {
    let req = parseInt(requestSize);
    if (!req || req <= 0) return;

    let size = 1;
    while (size < req) size <<= 1;

    let candidateIndex = freeList.findIndex(b => b.size >= size);
    if (candidateIndex === -1) {
      alert('No available block large enough');
      return;
    }

    const block = freeList[candidateIndex];
    freeList.splice(candidateIndex, 1);

    let currentBlock = { ...block };
    while (currentBlock.size > size) {
      const half = currentBlock.size / 2;
      const buddy = { size: half, address: currentBlock.address + half };
      currentBlock = { size: half, address: currentBlock.address };
      freeList.push(buddy);
    }

    const id = `B${currentBlock.address}-${currentBlock.size}`;
    setAllocList(prev => [...prev, { ...currentBlock, id }]);
    setFreeList([...freeList]);
    setRequestSize('');
    allocSound.play();
  };

  const freeBlock = (id) => {
    const block = allocList.find(b => b.id === id);
    if (!block) return;

    setAllocList(allocList.filter(b => b.id !== id));
    let newFree = [...freeList, { size: block.size, address: block.address }];

    // Merge buddies
    let merged = true;
    while (merged) {
      merged = false;
      for (let i = 0; i < newFree.length; i++) {
        const a = newFree[i];
        for (let j = i + 1; j < newFree.length; j++) {
          const b = newFree[j];
          if (a.size === b.size && getBuddyAddress(a.address, a.size) === b.address) {
            const mergedBlock = {
              size: a.size * 2,
              address: Math.min(a.address, b.address),
            };
            newFree.splice(j, 1);
            newFree.splice(i, 1);
            newFree.push(mergedBlock);
            merged = true;
            break;
          }
        }
        if (merged) break;
      }
    }

    setFreeList(newFree);
    freeSound.play();
  };

  const deallocateById = () => {
    if (!deallocId.trim()) return;
    freeBlock(deallocId.trim());
    setDeallocId('');
  };

  const renderBlocks = () => {
    const allBlocks = [
      ...freeList.map(b => ({ ...b, allocated: false })),
      ...allocList.map(b => ({ ...b, allocated: true }))
    ];
    allBlocks.sort((a, b) => a.address - b.address);

    return (
      <div className="block-container">
        {allBlocks.map((b, idx) => {
          const widthPercent = (b.size / memorySize) * 100;
          return (
            <div
              key={idx}
              onClick={() => b.allocated && freeBlock(b.id)}
              className={`memory-block ${b.allocated ? 'allocated' : 'free'}`}
              style={{ width: `${widthPercent}%`, minWidth: '120px' }}
            >
              {b.allocated ? `ID: ${b.id}` : `Free (${b.size}KB)`}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="simulation-wrapper">
      <div className="control-row">
        <div className="input-group">
          <label>Memory Size (KB):</label>
          <input
            type="number"
            value={memorySize}
            onChange={(e) => setMemorySize(e.target.value)}
          />
          <button onClick={initializeMemory}>Initialize</button>
        </div>

        <div className="input-group">
          <label>Allocation Size (KB):</label>
          <input
            type="number"
            value={requestSize}
            onChange={(e) => setRequestSize(e.target.value)}
          />
          <button onClick={allocateBlock}>Allocate</button>
        </div>
      </div>

      <div className="dealloc-row">
        <div className="input-group">
          <label>Deallocate by Block ID:</label>
          <input
            type="text"
            value={deallocId}
            onChange={(e) => setDeallocId(e.target.value)}
          />
          <button onClick={deallocateById}>Deallocate</button>
        </div>
      </div>

      {renderBlocks()}

      <p style={{ fontSize: '0.9em', color: '#555', textAlign: 'center' }}>
        * Click on an allocated block to free it and (if possible) see it merge with its buddy.
      
      </p>
    </div>
  );
}

export default BuddySimulation;
