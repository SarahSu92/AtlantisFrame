import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

// Mock Destinations
vi.mock('../../models/Destinations/DestinationIndex', () => ({
  Destinations: [
    { id: 4, name: 'Boston', region: 'NORTH AMERICA', activities: 'Urban Culture, Monuments', shortDescription: 'Historic U.S. city known for the Freedom Trail, universities, and coastal charm.' },
    { id: 2, name: 'Capri', region: 'EUROPE', activities: 'Hiking, Monuments', shortDescription: 'Italian island known for its dramatic cliffs, Blue Grotto, and upscale Mediterranean charm.' },
  ]
}));

import { DestinationPage } from '../src/pages/Destination/DestinationPage';

describe('DestinationPage', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <DestinationPage />
      </MemoryRouter>
    );
  });

  it('renders all regions', () => {
    const regions = ['All Destinations', 'EUROPE', 'NORTH AMERICA', 'AFRICA', 'ASIA'];
    regions.forEach(text => {
      const el = screen.queryByText(text);
      expect(el).not.toBeNull();
    });
  });

  it('renders destinations correctly under their regions', () => {
    const boston = screen.queryByText('Boston');
    expect(boston).not.toBeNull();

    const capri = screen.queryByText('Capri');
    expect(capri).not.toBeNull();
  });

  it('links have correct href', () => {
    const bostonLink = screen.queryByText('Boston')?.closest('a');
    expect(bostonLink).not.toBeNull();
    expect(bostonLink?.getAttribute('href')).toBe('/destination/4');

    const capriLink = screen.queryByText('Capri')?.closest('a');
    expect(capriLink).not.toBeNull();
    expect(capriLink?.getAttribute('href')).toBe('/destination/2');
  });
});