// src/pages/CheatSheet.js
import React from 'react';
import userIcon from '../assets/user-icon.png'; // make sure this image exists in assets

function CheatSheet() {
  return (
    <div style={{ maxWidth: '800px', margin: '2em auto', padding: '0 1em' }}>
      <h1 className="section-title">Buddy Memory Allocation Cheatsheet</h1>

<h2 className="section-title">Team Members</h2>
<ol>
  <li>
    <img src={userIcon} alt="user" width="20" style={{ verticalAlign: 'middle' }} />
    &nbsp; Tharun P
  </li>
  <li>
    <img src={userIcon} alt="user" width="20" style={{ verticalAlign: 'middle' }} />
    &nbsp; Agastya Patel
  </li>
  <li>
    <img src={userIcon} alt="user" width="20" style={{ verticalAlign: 'middle' }} />
    &nbsp; M M Manya Muthamma
  </li>
</ol>

      <h2 className="section-title">What is Buddy Memory Allocation?</h2>
      <p>
        Buddy Memory Allocation is a memory management algorithm that splits and merges blocks in powers of two
        to satisfy memory requests optimally. It starts with one large block of memory and splits it into halves
        until a block of suitable size is found. When blocks are freed, they merge back with their “buddies”
        if possible.
      </p>

      <h2 className="section-title">How It Works</h2>
      <ul>
        <li>Start with one large block (e.g., 1024KB total).</li>
        <li>To allocate, split the smallest free block into halves until the resulting block can fit the request.</li>
        <li>Assign that block and label it (e.g., ID).</li>
        <li>When freeing a block, merge it with its buddy if the buddy is also free, forming a larger block.</li>
      </ul>

      <h2 className="section-title">Pros</h2>
      <ul>
        <li>Fast allocation and deallocation.</li>
        <li>Efficient merging of adjacent free blocks.</li>
        <li>Reduces external fragmentation by enforcing power-of-two sizes.</li>
      </ul>

      <h2 className="section-title">Cons</h2>
      <ul>
        <li>May cause internal fragmentation (allocating a block larger than needed).</li>
        <li>Limited to power-of-two sizes; not all request sizes fit exactly.</li>
        <li>Requires extra bookkeeping (binary tree) to track splits/merges.</li>
      </ul>

      <h2 className="section-title">Key Formula</h2>
      <p style={{ background: 'var(--gray-light)', padding: '0.5em', borderRadius: '6px', display: 'inline-block' }}>
        <code>Buddy Address = (Block Address) XOR (Block Size)</code>
      </p>

      <h2 className="section-title">Memory Block Splitting Example</h2>
      <pre style={{
        background: '#f9f9f9',
        padding: '1em',
        borderRadius: '6px',
        overflowX: 'auto'
      }}>
1. 1024KB total
2. Split into 512KB + 512KB
3. Allocate 512KB (ID=B0-512)
4. Left 512KB free → split into 256KB + 256KB
5. Allocate 256KB (ID=B512-256)
6. Left 256KB free
      </pre>

      <a
        href="/cheatsheet.pdf"
        download
        className="download-btn"
        style={{
          display: 'inline-block',
          marginTop: '1.5em',
          padding: '0.75em 1.5em',
          backgroundColor: 'var(--blue-dark)',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none'
        }}
      >
        📥 Download Buddy System Cheat Sheet
      </a>
    </div>
  );
}

export default CheatSheet;
