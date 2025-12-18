import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { DestinationDetailPage } from '../src/pages/Destination/DestinationDetailPage';

// ---- PARTIAL MOCK OF REACT-ROUTER ----
vi.mock("react-router", async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const actual = await vi.importActual<any>("react-router");
  return {
    ...actual,
    useParams: () => ({ id: "4" }),
  };
});

// ---- MOCK Destination data ----
vi.mock("../../models/Destinations/DestinationIndex", () => ({
  Destinations: [
    {
      id: 4,
      name: "Boston",
      country: "United States",
      region: "NORTH AMERICA",
      heroimage: "/boston.jpg",
      image1: "/church.jpg",
      image2: "/bostoncity.jpg",
      longDescription: "Boston long description",
      tips: "Some tips",
      religion: "Christian",
      currency: "USD",
      climate: "Humid",
      language: "English",
      bestTimeToTravel: "May",
      hotels: ["Hotel 1", "Hotel 2"],
      attractions: ["Freedom Trail"],
      budget: "Budget text",
    },
  ],
}));

describe("DestinationDetailPage", () => {
  it("renders Boston page when id = 4", () => {
    render(
      <BrowserRouter>
        <DestinationDetailPage />
      </BrowserRouter>
    );

    expect(screen.getByText("Boston Travel Guide")).toBeDefined();
    expect(screen.getByText("United States · NORTH AMERICA")).toBeDefined();
  });
});




