import type { Response } from "express";
import { prisma } from "../lib/prisma";
import type { AuthRequest } from "../middleware/auth.middleware";

/**
 * @name createEventController
 * @description Creates a new event with a random invite code
 * @access Public
 */
async function createEventController(req: AuthRequest, res: Response) {
    try {
        const { name, date, location } = req.body;

        if (!name || !date || !location) {
            return res.status(400).json({
                message: "Please provide name, date and location",
            });
        }

        const eventCode = Math.random().toString(36).substring(2, 8);

        const eventDate = new Date(date);
        if (isNaN(eventDate.getTime())) {
            return res.status(400).json({ message: "Invalid date format" });
        }

        if (!req.user?.id) {
            return res.status(401).json({ message: "User not authenticated" });
        }

        const event = await prisma.event.create({
            data: {
                name: name,
                date: eventDate,
                location: location,
                invite_code: eventCode,
                is_active: true,
                user_id: req.user.id,
            },
        });

        return res.status(201).json({
            message: "Event created successfully",
            event: event,
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Internal server error";
        return res.status(500).json({ message });
    }
}

/**
 * @name getEventDetailsController
 * @description Gets details of a particular event related to the user.
 * @route GET /events/:eventId
 * @access Private
 */
async function getEventDetailsController(req: AuthRequest, res: Response) {
    try {
        if (!req.user?.id) {
            return res.status(401).json({ message: "User not authenticated" });
        }

        const eventId = req.params.eventId as string;

        if (!eventId) {
            return res.status(400).json({ message: "Event ID is required" });
        }

        const event = await prisma.event.findFirst({
            where: {
                id: eventId,
                user_id: req.user.id,
            },
        });

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        return res.status(200).json({
            message: "Event retrieved successfully",
            event: event,
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Internal server error";
        return res.status(500).json({ message });
    }
}

/**
 * @name updateEventDetailsController
 * @description Updates details of a particular event related to the user.
 * @route PUT /events/:eventId
 * @access Private
 */
async function updateEventDetailsController(req:AuthRequest, res:Response){
    try{
        if (!req.user?.id) {
            return res.status(401).json({ message: "User not authenticated" });
        }

        const eventId = req.params.eventId as string;

        if (!eventId) {
            return res.status(400).json({ message: "Event ID is required" });
        }

        const event = await prisma.event.findFirst({
            where: {
                id: eventId,
                user_id: req.user.id,
            },
        });

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        event.name = req.body.name || event.name;
        event.date = req.body.date || event.date;
        event.location = req.body.location || event.location;

        await prisma.event.update({
            where: {
                id: eventId,
            },
            data: event,
        });

        return res.status(200).json({
            message: "Event updated successfully",
            event: event,
        });


    }catch (error) {
        const message = error instanceof Error ? error.message : "Internal server error";
        return res.status(500).json({ message });
    }
}

/**
 * @name deleteEventController
 * @description Deletes a particular event related to the user.
 * @route DELETE /events/:eventId
 * @access Private
 */
async function deleteEventController(req:AuthRequest, res:Response){
    try{
        if (!req.user?.id) {
            return res.status(401).json({ message: "User not authenticated" });
        }

        const eventId = req.params.eventId as string;

        if (!eventId) {
            return res.status(400).json({ message: "Event ID is required" });
        }

        const event = await prisma.event.findFirst({
            where: {
                id: eventId,
                user_id: req.user.id,
            },
        });

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        await prisma.event.delete({
            where: {
                id: eventId,
            },
        });

        return res.status(200).json({
            message: "Event deleted successfully",
        });


    }catch (error) {
        const message = error instanceof Error ? error.message : "Internal server error";
        return res.status(500).json({ message });
    }
}

/**
 * @name getEventsController
 * @description Gets all events for the authenticated user
 * @access Private
 */
async function getEventsController(req: AuthRequest, res: Response) {
    try {
        if (!req.user?.id) {
            return res.status(401).json({ message: "User not authenticated" });
        }

        const events = await prisma.event.findMany({
            where: {
                user_id: req.user.id,
            },
        });

        return res.status(200).json({
            message: "Events retrieved successfully",
            events: events,
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Internal server error";
        return res.status(500).json({ message });
    }
}

export { createEventController, getEventDetailsController, updateEventDetailsController, getEventsController, deleteEventController };