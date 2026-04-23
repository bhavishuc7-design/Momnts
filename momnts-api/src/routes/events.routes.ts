import { Router } from "express";
import { createEventController, deleteEventController, getEventDetailsController, getEventsController, updateEventDetailsController } from "../controllers/events.controller";
import { authenticate } from "../middleware/auth.middleware";

const eventsRouter = Router();

// Create event
eventsRouter.post("/create", authenticate, createEventController);

// Get events
eventsRouter.get("/my-events", authenticate, getEventsController);

// Get event details
eventsRouter.get("/:eventId", authenticate, getEventDetailsController);

// Update event details
eventsRouter.put("/:eventId", authenticate, updateEventDetailsController);

// Delete event
eventsRouter.delete("/:eventId",authenticate, deleteEventController)

export { eventsRouter };