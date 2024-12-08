import React, { useState, useEffect } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { fetchYouTubePlaylists, saveLayout, loadLayout } from '../services/api';

// PlaylistCard Component
const PlaylistCard = ({ playlist, index, moveCard }) => {
  const [{ isDragging }, ref] = useDrag({
    type: 'CARD',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'CARD',
    hover: (item) => {
      if (item.index !== index) {
        moveCard(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      style={{
        margin: '10px',
        padding: '15px',
        backgroundColor: isDragging ? '#e0e0e0' : '#fff',
        border: '1px solid #ccc',
        borderRadius: '5px',
        textAlign: 'center',
      }}
    >
      <img src={playlist.thumbnail} alt={playlist.title} style={{ width: '150px' }} />
      <p>{playlist.title}</p>
    </div>
  );
};

// Main YouTubeImport Component
function YouTubeImport() {
  const [playlists, setPlaylists] = useState([]);
  const userId = 'test-user'; // Replace with actual userId after login

  // Fetch Playlists
  const handleFetchPlaylists = async () => {
    try {
      const { data } = await fetchYouTubePlaylists();
      setPlaylists(data);
    } catch (error) {
      console.error('Error fetching playlists:', error);
      alert('Failed to fetch playlists');
    }
  };

  // Save Layout
  const handleSaveLayout = async () => {
    try {
      await saveLayout(userId, playlists);
      alert('Layout Saved');
    } catch (error) {
      console.error('Error saving layout:', error);
      alert('Failed to save layout');
    }
  };

  // Load Layout
  const handleLoadLayout = async () => {
    try {
      const { data } = await loadLayout(userId);
      setPlaylists(data || []);
      alert('Layout Loaded');
    } catch (error) {
      console.error('Error loading layout:', error);
      alert('Failed to load layout');
    }
  };

  // Move Card Logic
  const moveCard = (fromIndex, toIndex) => {
    const updatedPlaylists = [...playlists];
    const [movedCard] = updatedPlaylists.splice(fromIndex, 1);
    updatedPlaylists.splice(toIndex, 0, movedCard);
    setPlaylists(updatedPlaylists);
  };

  useEffect(() => {
    handleLoadLayout();
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h2>YouTube Playlists</h2>
        <button onClick={handleFetchPlaylists}>Fetch Playlists</button>
        <button onClick={handleSaveLayout}>Save Layout</button>
        <button onClick={handleLoadLayout}>Load Layout</button>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: '20px',
          }}
        >
          {playlists.map((playlist, index) => (
            <PlaylistCard
              key={playlist.id || index}
              playlist={playlist}
              index={index}
              moveCard={moveCard}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}

export default YouTubeImport;
