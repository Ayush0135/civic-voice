
const path = require('path');
const dotenv = require('dotenv');
dotenv.config(); // <-- let it load from current working dir (backend)

const mongoose = require('mongoose');
const connectDB = require('../config/db');
const User = require('../models/User');
const Department = require('../models/Department');
const Issue = require('../models/Issue');

const seed = async () => {
  try {
    await connectDB();

    await User.deleteMany({});
    await Department.deleteMany({});
    await Issue.deleteMany({});

    const admin = await User.create({
      name: 'System Admin',
      email: 'admin@civicvoice.local',
      password: 'Admin@123',
      role: 'admin',
    });

    const citizens = await User.create([
      {
        name: 'Citizen One',
        email: 'citizen1@civicvoice.local',
        password: 'Citizen@123',
        role: 'citizen',
      },
      {
        name: 'Citizen Two',
        email: 'citizen2@civicvoice.local',
        password: 'Citizen@123',
        role: 'citizen',
      },
      {
        name: 'Citizen Three',
        email: 'citizen3@civicvoice.local',
        password: 'Citizen@123',
        role: 'citizen',
      },
    ]);

    const departments = await Department.create([
      { name: 'Roads & Transport', description: 'Potholes, signals, congestion' },
      { name: 'Water & Sewage', description: 'Leaks, contamination, flooding' },
      { name: 'Power', description: 'Outages, streetlights, power safety' },
    ]);

    const [roads, water, power] = departments;

    const deptUsers = await User.create([
      {
        name: 'Roads Officer',
        email: 'roads@civicvoice.local',
        password: 'Dept@123',
        role: 'department',
        department: roads._id,
      },
      {
        name: 'Water Officer',
        email: 'water@civicvoice.local',
        password: 'Dept@123',
        role: 'department',
        department: water._id,
      },
      {
        name: 'Power Officer',
        email: 'power@civicvoice.local',
        password: 'Dept@123',
        role: 'department',
        department: power._id,
      },
    ]);

    const issues = await Issue.create([
      {
        issueType: 'Pothole',
        location: 'Main Street, near Central Park',
        landmark: 'Central Park Entrance',
        severity: 'medium',
        description: 'Large pothole causing traffic slowdowns and potential damage to vehicles.',
        summary: 'Large pothole on Main Street',
        impact: 'Traffic congestion',
        recurrence: 'recurring',
        status: 'pending',
        createdBy: citizens[0]._id,
        geoLocation: {
          latitude: 40.785091,
          longitude: -73.968285,
          source: 'manual'
        }
      },
      {
        issueType: 'Water Leak',
        location: '4th Avenue, Block C',
        landmark: 'Near Starbucks',
        severity: 'high',
        description: 'Major water pipe burst flooding the street.',
        summary: 'Pipe burst on 4th Avenue',
        impact: 'Water wastage, flooding',
        recurrence: 'new',
        status: 'forwarded',
        forwardedTo: water._id,
        createdBy: citizens[1]._id,
        geoLocation: {
          latitude: 40.758896,
          longitude: -73.985130,
          source: 'manual'
        }
      },
      {
        issueType: 'Street Light Outage',
        location: 'Oak Drive',
        landmark: 'Corner of Oak & Pine',
        severity: 'low',
        description: 'Street light flickering and then went out completely.',
        summary: 'Street light out on Oak Drive',
        impact: 'Safety concern at night',
        recurrence: 'ongoing',
        status: 'completed',
        forwardedTo: power._id,
        createdBy: citizens[2]._id,
        geoLocation: {
          latitude: 40.748817,
          longitude: -73.985428,
          source: 'manual'
        }
      }
    ]);

    console.log('Seed data created');
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
};

seed();
