<script setup>
import { plantsListEng } from "../../data/general";
import { defineProps, computed } from 'vue';

// Define props to accept the title for filtering
const props = defineProps({
  sectionTitle: {
    type: String,
    required: false, // Optional, default to showing all
    default: null
  }
});

// Filter plantsList based on the passed sectionTitle
const filteredPlantsList = computed(() => {
  return props.sectionTitle
    ? plantsListEng.filter(group => group.title === props.sectionTitle)
    : plantsListEng; // Show all groups if no sectionTitle is provided
});
</script>


<template>
    <div class="plants-container">
    <div v-for="(group, groupIndex) in filteredPlantsList" :key="groupIndex" class="plants-group">
      <h3 class="plants-group-title">{{ group.title }}</h3>
      <p class="plants-group-description">{{ group.description }}</p>
  
        <!-- Table for each group's items -->
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>View</th>
              <th>Seeds</th>
              <th>Where to find</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(plant, plantIndex) in group.items" :key="plantIndex">
              <!-- Name -->
              <td>{{ plant.name }}</td>
  
              <!-- Image -->
              <td>
                <img :src="plant.image" :alt="plant.name" class="antialiasing-off img-mehanics-plants-items" />
              </td>
  
              <!-- Seed Image -->
              <td>
                <img :src="plant.seedimage" :alt="`${plant.name} seed`" class="antialiasing-off img-mehanics-plants-items" />
              </td>
  
              <!-- Place -->
              <td>
                <ul class="place-list">
                  <li v-for="(place, placeIndex) in plant.place" :key="placeIndex">
                    {{ place }}
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
