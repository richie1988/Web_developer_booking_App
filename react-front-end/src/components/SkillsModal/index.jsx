// SkillsModal.js
import React, { useState, useEffect } from 'react';

function SkillsModal({ skills }) {
  const globalPopularityPercentage = 75; // Replace with actual global popularity percentage
  const [editableSkills, setEditableSkills] = useState([]);

  const getRandomColor = () => {
    // Function to generate random color
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    // Initialize editableSkills when the component mounts
    setEditableSkills(skills.map(skill => ({ name: skill, progress: 10, color: getRandomColor() })));
  }, [skills]);

  const handleProgressBarChange = (index, value) => {
    setEditableSkills((prevSkills) => {
      const updatedSkills = [...prevSkills];
      updatedSkills[index].progress = value;
      return updatedSkills;
    });
  };
  

  return (
    <div className="modal fade" id="skillsModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="skillsModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="skillsModalLabel">Developer Skills</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {editableSkills.map((skill, index) => (
              <div key={index} className="mb-3">
                <h5>{skill.name}</h5>
                <div className="progress">
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="1"
                    value={skill.progress}
                    onChange={(e) => handleProgressBarChange(index, e.target.value)}
                    className="form-range"
                  />
                  <div className="progress-bar" role="progressbar" style={{ width: `${skill.progress}%`, backgroundColor: skill.color, borderRadius: '20px', position: 'relative', color: '#fff' }} aria-valuenow={skill.progress} aria-valuemin="0" aria-valuemax="100">
                    {skill.progress}%
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-3">
              <p>Global Popularity: {globalPopularityPercentage}%</p>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsModal;
