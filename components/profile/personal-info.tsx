"use client"

import type React from "react"

import { useState } from "react"
import { User, Save, Mail, Phone, MapPin, Calendar, Edit2 } from "lucide-react"
import { PageHeader } from "@/components/ui/page-header"

export function PersonalInfo() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@email.cuny.edu",
    phone: "(212) 555-1234",
    address: "123 Main St, New York, NY 10001",
    dateOfBirth: "1998-05-15",
    emergencyContact: "Mary Smith (Mother) - (212) 555-5678",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsEditing(false)
    // In a real app, this would save the data to a backend
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 pb-20">
      <PageHeader
        title="Personal Information"
        icon={<User className="h-5 w-5" />}
        backUrl="/profile"
        color="text-cyan-900"
      />

      <div className="container mx-auto p-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-cyan-100">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-cyan-900">Personal Details</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-3 py-1 bg-cyan-700 text-white rounded-md flex items-center text-sm"
              >
                {isEditing ? (
                  <>
                    <Save className="h-4 w-4 mr-1" /> Save
                  </>
                ) : (
                  <>
                    <Edit2 className="h-4 w-4 mr-1" /> Edit
                  </>
                )}
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  <div className="p-2 bg-gray-50 rounded-md">{formData.firstName}</div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  <div className="p-2 bg-gray-50 rounded-md">{formData.lastName}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <Mail className="h-4 w-4 mr-1 text-cyan-700" />
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  <div className="p-2 bg-gray-50 rounded-md">{formData.email}</div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <Phone className="h-4 w-4 mr-1 text-cyan-700" />
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  <div className="p-2 bg-gray-50 rounded-md">{formData.phone}</div>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-cyan-700" />
                  Address
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  <div className="p-2 bg-gray-50 rounded-md">{formData.address}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-cyan-700" />
                  Date of Birth
                </label>
                {isEditing ? (
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  <div className="p-2 bg-gray-50 rounded-md">{new Date(formData.dateOfBirth).toLocaleDateString()}</div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <Phone className="h-4 w-4 mr-1 text-cyan-700" />
                  Emergency Contact
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  <div className="p-2 bg-gray-50 rounded-md">{formData.emergencyContact}</div>
                )}
              </div>
            </div>

            {isEditing && (
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md mr-2"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-cyan-700 text-white rounded-md">
                  Save Changes
                </button>
              </div>
            )}
          </form>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mt-6">
          <div className="p-4 border-b border-gray-100 bg-cyan-100">
            <h2 className="text-lg font-semibold text-cyan-900">Communication Preferences</h2>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Email Notifications</h3>
                  <p className="text-sm text-gray-600">Receive important updates via email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">SMS Notifications</h3>
                  <p className="text-sm text-gray-600">Receive urgent alerts via text message</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Marketing Communications</h3>
                  <p className="text-sm text-gray-600">Receive updates about CUNY events and opportunities</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
