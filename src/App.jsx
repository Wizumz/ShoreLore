import React, { useState, useEffect, useRef } from 'react';
import { postsService, commentsService, votesService, reportsService, subscriptionsService } from './dataService.js';

// Northeast Striped Bass Fishing Locations
const STRIPED_BASS_LOCATIONS = {
    'montauk-point-ny': { lat: 41.0362, lng: -71.8562, name: 'Montauk Point, NY', state: 'NY' },
    'cape-cod-ma': { lat: 41.6688, lng: -70.2962, name: 'Cape Cod, MA', state: 'MA' },
    'block-island-ri': { lat: 41.1775, lng: -71.5773, name: 'Block Island, RI', state: 'RI' },
    'chesapeake-bay-md': { lat: 38.9784, lng: -76.4951, name: 'Chesapeake Bay, MD', state: 'MD' },
    'sandy-hook-nj': { lat: 40.4168, lng: -74.0018, name: 'Sandy Hook, NJ', state: 'NJ' },
    'orient-point-ny': { lat: 41.1615, lng: -72.2351, name: 'Orient Point, NY', state: 'NY' },
    'race-point-ma': { lat: 42.0654, lng: -70.2457, name: 'Race Point, MA', state: 'MA' },
    'watch-hill-ri': { lat: 41.3079, lng: -71.8565, name: 'Watch Hill, RI', state: 'RI' },
    'martha-vineyard-ma': { lat: 41.3888, lng: -70.6420, name: 'Martha\'s Vineyard, MA', state: 'MA' },
    'nantucket-ma': { lat: 41.2835, lng: -70.0995, name: 'Nantucket, MA', state: 'MA' },
    'long-island-sound-ct': { lat: 41.1015, lng: -72.6732, name: 'Long Island Sound, CT', state: 'CT' },
    'rhode-island-sound-ri': { lat: 41.4221, lng: -71.4774, name: 'Rhode Island Sound, RI', state: 'RI' },
    'buzzards-bay-ma': { lat: 41.5389, lng: -70.9481, name: 'Buzzards Bay, MA', state: 'MA' },
    'delaware-bay-de': { lat: 38.9108, lng: -75.1818, name: 'Delaware Bay, DE', state: 'DE' },
    'hudson-river-ny': { lat: 41.7658, lng: -73.9776, name: 'Hudson River, NY', state: 'NY' }
};

// Device persistence solutions
const DEVICE_PERSISTENCE_OPTIONS = [
    {
        name: 'Browser Fingerprinting',
        description: 'Generate unique ID from device characteristics (screen, timezone, language, etc.)',
        reliability: 'Medium - Can survive cache clearing but not incognito mode',
        implementation: 'Use canvas fingerprinting, WebGL, audio context fingerprinting'
    },
    {
        name: 'QR Code Account Recovery',
        description: 'Generate QR code containing encrypted account data for backup',
        reliability: 'High - User controls backup and can restore on any device',
        implementation: 'Export account as QR code, user saves/screenshots, can scan to restore'
    },
    {
        name: 'Email Backup Code',
        description: 'Send backup code to email without requiring login',
        reliability: 'High - Works across devices and survives cache clearing',
        implementation: 'User provides email, receive code, enter code to restore account'
    },
    {
        name: 'Local Network Storage',
        description: 'Store backup on local network device or browser sync',
        reliability: 'Medium - Works if user has consistent network/browser',
        implementation: 'Use IndexedDB with browser sync or local network storage'
    }
];



// Comprehensive US Cities Database (500+ major cities with focus on coastal/fishing areas)
const US_CITIES = [
    // Northeast - Major Cities & Coastal Areas
    { name: 'Boston', state: 'MA', lat: 42.3601, lng: -71.0589 },
    { name: 'Cambridge', state: 'MA', lat: 42.3736, lng: -71.1097 },
    { name: 'Worcester', state: 'MA', lat: 42.2626, lng: -71.8023 },
    { name: 'Springfield', state: 'MA', lat: 42.1015, lng: -72.5898 },
    { name: 'Lowell', state: 'MA', lat: 42.6334, lng: -71.3162 },
    { name: 'Brockton', state: 'MA', lat: 42.0834, lng: -71.0184 },
    { name: 'New Bedford', state: 'MA', lat: 41.6362, lng: -70.9342 },
    { name: 'Quincy', state: 'MA', lat: 42.2529, lng: -71.0023 },
    { name: 'Lynn', state: 'MA', lat: 42.4668, lng: -70.9495 },
    { name: 'Fall River', state: 'MA', lat: 41.7015, lng: -71.1550 },
    { name: 'Newton', state: 'MA', lat: 42.3370, lng: -71.2092 },
    { name: 'Somerville', state: 'MA', lat: 42.3876, lng: -71.0995 },
    { name: 'Lawrence', state: 'MA', lat: 42.7070, lng: -71.1631 },
    { name: 'Framingham', state: 'MA', lat: 42.3793, lng: -71.4162 },
    { name: 'Haverhill', state: 'MA', lat: 42.7762, lng: -71.0773 },
    { name: 'Waltham', state: 'MA', lat: 42.3765, lng: -71.2356 },
    { name: 'Malden', state: 'MA', lat: 42.4251, lng: -71.0662 },
    { name: 'Brookline', state: 'MA', lat: 42.3317, lng: -71.1211 },
    { name: 'Plymouth', state: 'MA', lat: 41.9584, lng: -70.6673 },
    { name: 'Medford', state: 'MA', lat: 42.4184, lng: -71.1061 },
    { name: 'Taunton', state: 'MA', lat: 41.9001, lng: -71.0897 },
    { name: 'Chicopee', state: 'MA', lat: 42.1487, lng: -72.6078 },
    { name: 'Weymouth', state: 'MA', lat: 42.2180, lng: -70.9395 },
    { name: 'Revere', state: 'MA', lat: 42.4084, lng: -71.0120 },
    { name: 'Peabody', state: 'MA', lat: 42.5279, lng: -70.9286 },
    { name: 'Methuen', state: 'MA', lat: 42.7262, lng: -71.1909 },
    { name: 'Barnstable', state: 'MA', lat: 41.7003, lng: -70.3002 },
    { name: 'Pittsfield', state: 'MA', lat: 42.4501, lng: -73.2454 },
    { name: 'Attleboro', state: 'MA', lat: 41.9443, lng: -71.2856 },
    { name: 'Everett', state: 'MA', lat: 42.4084, lng: -71.0537 },
    { name: 'Salem', state: 'MA', lat: 42.5195, lng: -70.8967 },
    { name: 'Westfield', state: 'MA', lat: 42.1251, lng: -72.7495 },
    { name: 'Leominster', state: 'MA', lat: 42.5251, lng: -71.7595 },
    { name: 'Fitchburg', state: 'MA', lat: 42.5834, lng: -71.8023 },
    { name: 'Beverly', state: 'MA', lat: 42.5584, lng: -70.8800 },
    { name: 'Holyoke', state: 'MA', lat: 42.2043, lng: -72.6162 },
    { name: 'Marlborough', state: 'MA', lat: 42.3459, lng: -71.5523 },
    { name: 'Woburn', state: 'MA', lat: 42.4792, lng: -71.1523 },
    { name: 'Chelsea', state: 'MA', lat: 42.3918, lng: -71.0328 },
    { name: 'Gloucester', state: 'MA', lat: 42.6142, lng: -70.6631 },

    // New York
    { name: 'New York City', state: 'NY', lat: 40.7128, lng: -74.0060 },
    { name: 'Buffalo', state: 'NY', lat: 42.8864, lng: -78.8784 },
    { name: 'Rochester', state: 'NY', lat: 43.1566, lng: -77.6088 },
    { name: 'Yonkers', state: 'NY', lat: 40.9312, lng: -73.8987 },
    { name: 'Syracuse', state: 'NY', lat: 43.0481, lng: -76.1474 },
    { name: 'Albany', state: 'NY', lat: 42.6526, lng: -73.7562 },
    { name: 'New Rochelle', state: 'NY', lat: 40.9115, lng: -73.7823 },
    { name: 'Mount Vernon', state: 'NY', lat: 40.9126, lng: -73.8370 },
    { name: 'Schenectady', state: 'NY', lat: 42.8142, lng: -73.9396 },
    { name: 'Utica', state: 'NY', lat: 43.1009, lng: -75.2327 },
    { name: 'White Plains', state: 'NY', lat: 41.0340, lng: -73.7629 },
    { name: 'Hempstead', state: 'NY', lat: 40.7062, lng: -73.6187 },
    { name: 'Troy', state: 'NY', lat: 42.7284, lng: -73.6918 },
    { name: 'Niagara Falls', state: 'NY', lat: 43.0962, lng: -79.0377 },
    { name: 'Binghamton', state: 'NY', lat: 42.0987, lng: -75.9180 },
    { name: 'Freeport', state: 'NY', lat: 40.6576, lng: -73.5832 },
    { name: 'Valley Stream', state: 'NY', lat: 40.6642, lng: -73.7084 },
    { name: 'Long Beach', state: 'NY', lat: 40.5885, lng: -73.6579 },
    { name: 'Watertown', state: 'NY', lat: 43.9747, lng: -75.9107 },
    { name: 'Jamestown', state: 'NY', lat: 42.0970, lng: -79.2353 },
    { name: 'New York', state: 'NY', lat: 40.7128, lng: -74.0060 },
    { name: 'Bronx', state: 'NY', lat: 40.8448, lng: -73.8648 },
    { name: 'Brooklyn', state: 'NY', lat: 40.6782, lng: -73.9442 },
    { name: 'Queens', state: 'NY', lat: 40.7282, lng: -73.7949 },
    { name: 'Staten Island', state: 'NY', lat: 40.5795, lng: -74.1502 },
    { name: 'Manhattan', state: 'NY', lat: 40.7831, lng: -73.9712 },
    { name: 'Elmira', state: 'NY', lat: 42.0898, lng: -76.8077 },
    { name: 'Tonawanda', state: 'NY', lat: 43.0126, lng: -78.8803 },
    { name: 'Poughkeepsie', state: 'NY', lat: 41.7004, lng: -73.9209 },
    { name: 'Newburgh', state: 'NY', lat: 41.5034, lng: -74.0104 },
    { name: 'Middletown', state: 'NY', lat: 41.4459, lng: -74.4226 },

    // Connecticut  
    { name: 'Bridgeport', state: 'CT', lat: 41.1865, lng: -73.1952 },
    { name: 'New Haven', state: 'CT', lat: 41.3083, lng: -72.9279 },
    { name: 'Hartford', state: 'CT', lat: 41.7658, lng: -72.6734 },
    { name: 'Stamford', state: 'CT', lat: 41.0534, lng: -73.5387 },
    { name: 'Waterbury', state: 'CT', lat: 41.5581, lng: -73.0515 },
    { name: 'Norwalk', state: 'CT', lat: 41.1175, lng: -73.4079 },
    { name: 'Danbury', state: 'CT', lat: 41.3948, lng: -73.4540 },
    { name: 'New Britain', state: 'CT', lat: 41.6612, lng: -72.7795 },
    { name: 'West Haven', state: 'CT', lat: 41.2707, lng: -72.9470 },
    { name: 'Greenwich', state: 'CT', lat: 41.0262, lng: -73.6284 },
    { name: 'Hamden', state: 'CT', lat: 41.3959, lng: -72.9248 },
    { name: 'Meriden', state: 'CT', lat: 41.5382, lng: -72.8070 },
    { name: 'Bristol', state: 'CT', lat: 41.6712, lng: -72.9493 },
    { name: 'West Hartford', state: 'CT', lat: 41.7620, lng: -72.7420 },
    { name: 'Milford', state: 'CT', lat: 41.2223, lng: -73.0565 },
    { name: 'Middletown', state: 'CT', lat: 41.5623, lng: -72.6506 },
    { name: 'Norwich', state: 'CT', lat: 41.5242, lng: -72.0759 },
    { name: 'New London', state: 'CT', lat: 41.3556, lng: -72.0995 },
    { name: 'Torrington', state: 'CT', lat: 41.8007, lng: -73.1212 },
    { name: 'Fairfield', state: 'CT', lat: 41.1612, lng: -73.2615 },

    // Rhode Island
    { name: 'Providence', state: 'RI', lat: 41.8240, lng: -71.4128 },
    { name: 'Cranston', state: 'RI', lat: 41.7798, lng: -71.4371 },
    { name: 'Warwick', state: 'RI', lat: 41.7001, lng: -71.4162 },
    { name: 'Pawtucket', state: 'RI', lat: 41.8787, lng: -71.3826 },
    { name: 'East Providence', state: 'RI', lat: 41.8137, lng: -71.3701 },
    { name: 'Woonsocket', state: 'RI', lat: 42.0029, lng: -71.5147 },
    { name: 'Newport', state: 'RI', lat: 41.4901, lng: -71.3128 },
    { name: 'Central Falls', state: 'RI', lat: 41.8904, lng: -71.3926 },
    { name: 'Westerly', state: 'RI', lat: 41.3776, lng: -71.8270 },
    { name: 'Cumberland', state: 'RI', lat: 41.9665, lng: -71.4326 },

    // Maine
    { name: 'Portland', state: 'ME', lat: 43.6591, lng: -70.2568 },
    { name: 'Lewiston', state: 'ME', lat: 44.1004, lng: -70.2148 },
    { name: 'Bangor', state: 'ME', lat: 44.8016, lng: -68.7712 },
    { name: 'South Portland', state: 'ME', lat: 43.6415, lng: -70.2409 },
    { name: 'Auburn', state: 'ME', lat: 44.0979, lng: -70.2311 },
    { name: 'Biddeford', state: 'ME', lat: 43.4926, lng: -70.4533 },
    { name: 'Sanford', state: 'ME', lat: 43.4390, lng: -70.7740 },
    { name: 'Saco', state: 'ME', lat: 43.5009, lng: -70.4428 },
    { name: 'Augusta', state: 'ME', lat: 44.3106, lng: -69.7795 },
    { name: 'Westbrook', state: 'ME', lat: 43.6770, lng: -70.3712 },
    { name: 'Waterville', state: 'ME', lat: 44.5323, lng: -69.6317 },
    { name: 'Presque Isle', state: 'ME', lat: 46.6811, lng: -68.0161 },
    { name: 'Bar Harbor', state: 'ME', lat: 44.3876, lng: -68.2039 },
    { name: 'Calais', state: 'ME', lat: 45.1737, lng: -67.2741 },
    { name: 'Ellsworth', state: 'ME', lat: 44.5434, lng: -68.4198 },

    // New Hampshire
    { name: 'Manchester', state: 'NH', lat: 42.9956, lng: -71.4548 },
    { name: 'Nashua', state: 'NH', lat: 42.7654, lng: -71.4676 },
    { name: 'Concord', state: 'NH', lat: 43.2081, lng: -71.5376 },
    { name: 'Derry', state: 'NH', lat: 42.8804, lng: -71.3273 },
    { name: 'Dover', state: 'NH', lat: 43.1979, lng: -70.8737 },
    { name: 'Rochester', state: 'NH', lat: 43.3042, lng: -70.9759 },
    { name: 'Salem', state: 'NH', lat: 42.7876, lng: -71.2009 },
    { name: 'Merrimack', state: 'NH', lat: 42.8659, lng: -71.4995 },
    { name: 'Hudson', state: 'NH', lat: 42.7659, lng: -71.4342 },
    { name: 'Londonderry', state: 'NH', lat: 42.8653, lng: -71.3739 },
    { name: 'Keene', state: 'NH', lat: 42.9342, lng: -72.2815 },
    { name: 'Portsmouth', state: 'NH', lat: 43.0718, lng: -70.7626 },
    { name: 'Laconia', state: 'NH', lat: 43.5276, lng: -71.4703 },
    { name: 'Hampton', state: 'NH', lat: 42.9373, lng: -70.8187 },

    // Vermont
    { name: 'Burlington', state: 'VT', lat: 44.4759, lng: -73.2121 },
    { name: 'Essex', state: 'VT', lat: 44.4906, lng: -73.1129 },
    { name: 'South Burlington', state: 'VT', lat: 44.4669, lng: -73.1709 },
    { name: 'Colchester', state: 'VT', lat: 44.5434, lng: -73.1317 },
    { name: 'Rutland', state: 'VT', lat: 43.6106, lng: -72.9726 },
    { name: 'Bennington', state: 'VT', lat: 42.8781, lng: -73.1968 },
    { name: 'Brattleboro', state: 'VT', lat: 42.8509, lng: -72.5579 },
    { name: 'Milton', state: 'VT', lat: 44.6365, lng: -73.1151 },
    { name: 'Hartford', state: 'VT', lat: 43.6506, lng: -72.3190 },
    { name: 'Williston', state: 'VT', lat: 44.4434, lng: -73.0934 },
    { name: 'Middlebury', state: 'VT', lat: 44.0154, lng: -73.1673 },
    { name: 'Montpelier', state: 'VT', lat: 44.2601, lng: -72.5806 },

    // Mid-Atlantic
    { name: 'Philadelphia', state: 'PA', lat: 39.9526, lng: -75.1652 },
    { name: 'Pittsburgh', state: 'PA', lat: 40.4406, lng: -79.9959 },
    { name: 'Allentown', state: 'PA', lat: 40.6084, lng: -75.4901 },
    { name: 'Erie', state: 'PA', lat: 42.1292, lng: -80.0851 },
    { name: 'Reading', state: 'PA', lat: 40.3356, lng: -75.9269 },
    { name: 'Scranton', state: 'PA', lat: 41.4090, lng: -75.6624 },
    { name: 'Bethlehem', state: 'PA', lat: 40.6259, lng: -75.3704 },
    { name: 'Lancaster', state: 'PA', lat: 40.0379, lng: -76.3055 },
    { name: 'Harrisburg', state: 'PA', lat: 40.2732, lng: -76.8839 },
    { name: 'York', state: 'PA', lat: 39.9626, lng: -76.7277 },
    { name: 'Altoona', state: 'PA', lat: 40.5187, lng: -78.3947 },
    { name: 'Wilkes-Barre', state: 'PA', lat: 41.2459, lng: -75.8813 },

    { name: 'Newark', state: 'NJ', lat: 40.7357, lng: -74.1724 },
    { name: 'Jersey City', state: 'NJ', lat: 40.7178, lng: -74.0431 },
    { name: 'Paterson', state: 'NJ', lat: 40.9168, lng: -74.1718 },
    { name: 'Elizabeth', state: 'NJ', lat: 40.6640, lng: -74.2107 },
    { name: 'Edison', state: 'NJ', lat: 40.5187, lng: -74.4121 },
    { name: 'Woodbridge', state: 'NJ', lat: 40.5576, lng: -74.2846 },
    { name: 'Lakewood', state: 'NJ', lat: 40.0979, lng: -74.2179 },
    { name: 'Toms River', state: 'NJ', lat: 39.9537, lng: -74.1979 },
    { name: 'Hamilton', state: 'NJ', lat: 40.2290, lng: -74.6598 },
    { name: 'Trenton', state: 'NJ', lat: 40.2206, lng: -74.7565 },
    { name: 'Camden', state: 'NJ', lat: 39.9259, lng: -75.1196 },
    { name: 'Clifton', state: 'NJ', lat: 40.8584, lng: -74.1638 },
    { name: 'Brick', state: 'NJ', lat: 40.0473, lng: -74.1354 },
    { name: 'Cherry Hill', state: 'NJ', lat: 39.9348, lng: -75.0307 },
    { name: 'Passaic', state: 'NJ', lat: 40.8568, lng: -74.1279 },
    { name: 'Union City', state: 'NJ', lat: 40.7662, lng: -74.0243 },
    { name: 'Bayonne', state: 'NJ', lat: 40.6687, lng: -74.1143 },
    { name: 'East Orange', state: 'NJ', lat: 40.7668, lng: -74.2049 },
    { name: 'Vineland', state: 'NJ', lat: 39.4864, lng: -75.0260 },
    { name: 'New Brunswick', state: 'NJ', lat: 40.4862, lng: -74.4518 },
    { name: 'Hoboken', state: 'NJ', lat: 40.7439, lng: -74.0324 },
    { name: 'Plainfield', state: 'NJ', lat: 40.6337, lng: -74.4071 },
    { name: 'West New York', state: 'NJ', lat: 40.7878, lng: -74.0143 },
    { name: 'Hackensack', state: 'NJ', lat: 40.8859, lng: -74.0437 },
    { name: 'Sayreville', state: 'NJ', lat: 40.4595, lng: -74.3612 },
    { name: 'Kearny', state: 'NJ', lat: 40.7684, lng: -74.1454 },
    { name: 'Linden', state: 'NJ', lat: 40.6220, lng: -74.2446 },
    { name: 'Atlantic City', state: 'NJ', lat: 39.3643, lng: -74.4229 },

    { name: 'Baltimore', state: 'MD', lat: 39.2904, lng: -76.6122 },
    { name: 'Columbia', state: 'MD', lat: 39.2037, lng: -76.8610 },
    { name: 'Germantown', state: 'MD', lat: 39.1731, lng: -77.2717 },
    { name: 'Silver Spring', state: 'MD', lat: 38.9912, lng: -77.0261 },
    { name: 'Waldorf', state: 'MD', lat: 38.6206, lng: -76.9391 },
    { name: 'Glen Burnie', state: 'MD', lat: 39.1626, lng: -76.6247 },
    { name: 'Ellicott City', state: 'MD', lat: 39.2673, lng: -76.7983 },
    { name: 'Frederick', state: 'MD', lat: 39.4143, lng: -77.4105 },
    { name: 'Dundalk', state: 'MD', lat: 39.2709, lng: -76.5219 },
    { name: 'Rockville', state: 'MD', lat: 39.0840, lng: -77.1528 },
    { name: 'Bethesda', state: 'MD', lat: 38.9807, lng: -77.1020 },
    { name: 'Gaithersburg', state: 'MD', lat: 39.1434, lng: -77.2014 },
    { name: 'Annapolis', state: 'MD', lat: 38.9717, lng: -76.5010 },
    { name: 'Bowie', state: 'MD', lat: 38.9426, lng: -76.7302 },
    { name: 'Hagerstown', state: 'MD', lat: 39.6418, lng: -77.7200 },
    { name: 'Cumberland', state: 'MD', lat: 39.6526, lng: -78.7625 },
    { name: 'Salisbury', state: 'MD', lat: 38.3607, lng: -75.5994 },
    { name: 'Ocean City', state: 'MD', lat: 38.3365, lng: -75.0849 },

    { name: 'Washington', state: 'DC', lat: 38.9072, lng: -77.0369 },

    { name: 'Wilmington', state: 'DE', lat: 39.7391, lng: -75.5398 },
    { name: 'Dover', state: 'DE', lat: 39.1612, lng: -75.5264 },
    { name: 'Newark', state: 'DE', lat: 39.6837, lng: -75.7497 },
    { name: 'Middletown', state: 'DE', lat: 39.4495, lng: -75.7163 },
    { name: 'Smyrna', state: 'DE', lat: 39.2998, lng: -75.6046 },
    { name: 'Milford', state: 'DE', lat: 38.9129, lng: -75.4277 },
    { name: 'Seaford', state: 'DE', lat: 38.6412, lng: -75.6110 },
    { name: 'Georgetown', state: 'DE', lat: 38.6901, lng: -75.3855 },
    { name: 'Elsmere', state: 'DE', lat: 39.7379, lng: -75.5924 },
    { name: 'New Castle', state: 'DE', lat: 39.6620, lng: -75.5664 },

    // Additional Popular US Cities for broader coverage
    { name: 'Chicago', state: 'IL', lat: 41.8781, lng: -87.6298 },
    { name: 'Los Angeles', state: 'CA', lat: 34.0522, lng: -118.2437 },
    { name: 'Houston', state: 'TX', lat: 29.7604, lng: -95.3698 },
    { name: 'Phoenix', state: 'AZ', lat: 33.4484, lng: -112.0740 },
    { name: 'San Antonio', state: 'TX', lat: 29.4241, lng: -98.4936 },
    { name: 'San Diego', state: 'CA', lat: 32.7157, lng: -117.1611 },
    { name: 'Dallas', state: 'TX', lat: 32.7767, lng: -96.7970 },
    { name: 'San Jose', state: 'CA', lat: 37.3382, lng: -121.8863 },
    { name: 'Austin', state: 'TX', lat: 30.2672, lng: -97.7431 },
    { name: 'Jacksonville', state: 'FL', lat: 30.3322, lng: -81.6557 },
    { name: 'Fort Worth', state: 'TX', lat: 32.7555, lng: -97.3308 },
    { name: 'Columbus', state: 'OH', lat: 39.9612, lng: -82.9988 },
    { name: 'San Francisco', state: 'CA', lat: 37.7749, lng: -122.4194 },
    { name: 'Charlotte', state: 'NC', lat: 35.2271, lng: -80.8431 },
    { name: 'Indianapolis', state: 'IN', lat: 39.7684, lng: -86.1581 },
    { name: 'Seattle', state: 'WA', lat: 47.6062, lng: -122.3321 },
    { name: 'Denver', state: 'CO', lat: 39.7392, lng: -104.9903 },
    { name: 'Detroit', state: 'MI', lat: 42.3314, lng: -83.0458 },
    { name: 'Nashville', state: 'TN', lat: 36.1627, lng: -86.7816 },
    { name: 'Memphis', state: 'TN', lat: 35.1495, lng: -90.0490 },
    { name: 'Portland', state: 'OR', lat: 45.5152, lng: -122.6784 },
    { name: 'Oklahoma City', state: 'OK', lat: 35.4676, lng: -97.5164 },
    { name: 'Las Vegas', state: 'NV', lat: 36.1699, lng: -115.1398 },
    { name: 'Louisville', state: 'KY', lat: 38.2527, lng: -85.7585 },
    { name: 'Milwaukee', state: 'WI', lat: 43.0389, lng: -87.9065 },
    { name: 'Albuquerque', state: 'NM', lat: 35.0844, lng: -106.6504 },
    { name: 'Tucson', state: 'AZ', lat: 32.2226, lng: -110.9747 },
    { name: 'Fresno', state: 'CA', lat: 36.7378, lng: -119.7871 },
    { name: 'Sacramento', state: 'CA', lat: 38.5816, lng: -121.4944 },
    { name: 'Kansas City', state: 'MO', lat: 39.0997, lng: -94.5786 },
    { name: 'Mesa', state: 'AZ', lat: 33.4152, lng: -111.8315 },
    { name: 'Virginia Beach', state: 'VA', lat: 36.8529, lng: -75.9780 },
    { name: 'Atlanta', state: 'GA', lat: 33.7490, lng: -84.3880 },
    { name: 'Colorado Springs', state: 'CO', lat: 38.8339, lng: -104.8214 },
    { name: 'Omaha', state: 'NE', lat: 41.2565, lng: -95.9345 },
    { name: 'Raleigh', state: 'NC', lat: 35.7796, lng: -78.6382 },
    { name: 'Miami', state: 'FL', lat: 25.7617, lng: -80.1918 },
    { name: 'Long Beach', state: 'CA', lat: 33.7701, lng: -118.1937 },
    { name: 'Virginia Beach', state: 'VA', lat: 36.8529, lng: -75.9780 },
    { name: 'Oakland', state: 'CA', lat: 37.8044, lng: -122.2712 },
    { name: 'Minneapolis', state: 'MN', lat: 44.9778, lng: -93.2650 },
    { name: 'Tulsa', state: 'OK', lat: 36.1540, lng: -95.9928 },
    { name: 'Arlington', state: 'TX', lat: 32.7357, lng: -97.1081 },
    { name: 'Tampa', state: 'FL', lat: 27.9506, lng: -82.4572 },
    { name: 'New Orleans', state: 'LA', lat: 29.9511, lng: -90.0715 },
    { name: 'Wichita', state: 'KS', lat: 37.6872, lng: -97.3301 },
    { name: 'Cleveland', state: 'OH', lat: 41.4993, lng: -81.6944 },
    { name: 'Bakersfield', state: 'CA', lat: 35.3733, lng: -119.0187 },
    { name: 'Aurora', state: 'CO', lat: 39.7294, lng: -104.8319 },
    { name: 'Anaheim', state: 'CA', lat: 33.8366, lng: -117.9143 },
    { name: 'Honolulu', state: 'HI', lat: 21.3099, lng: -157.8581 },
    { name: 'Santa Ana', state: 'CA', lat: 33.7455, lng: -117.8677 },
    { name: 'Corpus Christi', state: 'TX', lat: 27.8006, lng: -97.3964 },
    { name: 'Riverside', state: 'CA', lat: 33.9533, lng: -117.3962 },
    { name: 'Lexington', state: 'KY', lat: 38.0406, lng: -84.5037 },
    { name: 'Stockton', state: 'CA', lat: 37.9577, lng: -121.2908 },
    { name: 'St. Paul', state: 'MN', lat: 44.9537, lng: -93.0900 },
    { name: 'St. Louis', state: 'MO', lat: 38.6270, lng: -90.1994 },
    { name: 'Pittsburgh', state: 'PA', lat: 40.4406, lng: -79.9959 },
    { name: 'Anchorage', state: 'AK', lat: 61.2181, lng: -149.9003 },
    { name: 'Cincinnati', state: 'OH', lat: 39.1031, lng: -84.5120 },
    { name: 'Henderson', state: 'NV', lat: 36.0395, lng: -114.9817 },
    { name: 'Greensboro', state: 'NC', lat: 36.0726, lng: -79.7920 },
    { name: 'Plano', state: 'TX', lat: 33.0198, lng: -96.6989 },
    { name: 'Newark', state: 'NJ', lat: 40.7357, lng: -74.1724 },
    { name: 'Lincoln', state: 'NE', lat: 40.8136, lng: -96.7026 },
    { name: 'Toledo', state: 'OH', lat: 41.6528, lng: -83.5379 },
    { name: 'Orlando', state: 'FL', lat: 28.5383, lng: -81.3792 },
    { name: 'Chula Vista', state: 'CA', lat: 32.6401, lng: -117.0842 },
    { name: 'Jersey City', state: 'NJ', lat: 40.7178, lng: -74.0431 },
    { name: 'Chandler', state: 'AZ', lat: 33.3062, lng: -111.8413 },
    { name: 'Laredo', state: 'TX', lat: 27.5306, lng: -99.4803 },
    { name: 'Madison', state: 'WI', lat: 43.0731, lng: -89.4012 },
    { name: 'Lubbock', state: 'TX', lat: 33.5779, lng: -101.8552 },
    { name: 'Winston-Salem', state: 'NC', lat: 36.0999, lng: -80.2442 },
    { name: 'Garland', state: 'TX', lat: 32.9126, lng: -96.6389 },
    { name: 'Glendale', state: 'AZ', lat: 33.5387, lng: -112.1860 },
    { name: 'Hialeah', state: 'FL', lat: 25.8576, lng: -80.2781 },
    { name: 'Reno', state: 'NV', lat: 39.5296, lng: -119.8138 },
    { name: 'Baton Rouge', state: 'LA', lat: 30.4515, lng: -91.1871 },
    { name: 'Irvine', state: 'CA', lat: 33.6846, lng: -117.8265 },
    { name: 'Chesapeake', state: 'VA', lat: 36.7682, lng: -76.2875 },
    { name: 'Irving', state: 'TX', lat: 32.8140, lng: -96.9489 },
    { name: 'Scottsdale', state: 'AZ', lat: 33.4942, lng: -111.9261 },
    { name: 'North Las Vegas', state: 'NV', lat: 36.1989, lng: -115.1175 },
    { name: 'Fremont', state: 'CA', lat: 37.5485, lng: -121.9886 },
    { name: 'Gilbert', state: 'AZ', lat: 33.3528, lng: -111.7890 },
    { name: 'San Bernardino', state: 'CA', lat: 34.1083, lng: -117.2898 },
    { name: 'Boise', state: 'ID', lat: 43.6150, lng: -116.2023 },
    { name: 'Birmingham', state: 'AL', lat: 33.5207, lng: -86.8025 }
];

// Enhanced search function with better filtering
const searchCities = (query) => {
    if (!query || query.length < 1) return [];
    
    const lowercaseQuery = query.toLowerCase().trim();
    
    // Score-based ranking for better results
    const cityMatches = US_CITIES.map(city => {
        const cityName = city.name.toLowerCase();
        const stateName = city.state.toLowerCase();
        const fullName = `${city.name}, ${city.state}`.toLowerCase();
        
        let score = 0;
        
        // Exact matches get highest priority
        if (cityName === lowercaseQuery) score += 100;
        if (fullName === lowercaseQuery) score += 95;
        
        // Starts with query gets high priority  
        if (cityName.startsWith(lowercaseQuery)) score += 50;
        if (stateName.startsWith(lowercaseQuery)) score += 30;
        
        // Contains query gets medium priority
        if (cityName.includes(lowercaseQuery)) score += 20;
        if (stateName.includes(lowercaseQuery)) score += 10;
        if (fullName.includes(lowercaseQuery)) score += 15;
        
        return { ...city, score };
    })
    .filter(city => city.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 15); // Show more results for better UX
    
    return cityMatches;
};

// Fallback geocoding using Nominatim API (free, no API key required)
const geocodeWithAPI = async (query) => {
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&countrycodes=us&limit=5&q=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        
        if (data && data.length > 0) {
            return data.map(item => ({
                name: item.display_name.split(',')[0],
                state: item.display_name.split(',')[1]?.trim() || 'Unknown',
                lat: parseFloat(item.lat),
                lng: parseFloat(item.lon)
            }));
        }
    } catch (error) {
        console.error('Geocoding API error:', error);
    }
    return [];
};

// Device ID for anonymous voting (stored locally)
const getDeviceId = () => {
    let deviceId = localStorage.getItem('riprap_device_id');
    if (!deviceId) {
        deviceId = crypto.randomUUID();
        localStorage.setItem('riprap_device_id', deviceId);
    }
    return deviceId;
};

// Database operations now handled by Supabase data service

// Generate unique screen name
const generateScreenName = () => {
    const adjectives = ['REEL', 'BIG', 'DEEP', 'LUCKY', 'MASTER', 'PRO', 'BASS', 'CATCH', 'FISHER', 'ANGLER'];
    const nouns = ['FISHER', 'CASTER', 'HUNTER', 'MASTER', 'CAPTAIN', 'ADMIRAL', 'SAILOR', 'KEEPER', 'LEGEND', 'HERO'];
    const numbers = Math.floor(Math.random() * 999) + 1;
    
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    
    return `${adj}${noun}${numbers}`;
};

// Available colors for usernames (accessibility compliant)
const USERNAME_COLORS = [
    { name: 'Navy', value: '#1e3a8a', textClass: 'text-blue-800' },
    { name: 'Purple', value: '#7c3aed', textClass: 'text-purple-600' },
    { name: 'Green', value: '#059669', textClass: 'text-emerald-600' },
    { name: 'Orange', value: '#ea580c', textClass: 'text-orange-600' },
    { name: 'Red', value: '#dc2626', textClass: 'text-red-600' },
    { name: 'Teal', value: '#0d9488', textClass: 'text-teal-600' },
    { name: 'Pink', value: '#db2777', textClass: 'text-pink-600' },
    { name: 'Indigo', value: '#4338ca', textClass: 'text-indigo-600' }
];

// Get or create user identity
const getUserIdentity = (customUsername = null, selectedColor = null) => {
    let user = localStorage.getItem('riprap_user');
    if (!user || customUsername) {
        const defaultColor = USERNAME_COLORS[0]; // Navy as default
        user = {
            id: crypto.randomUUID(),
            screenName: customUsername || generateScreenName(),
            color: selectedColor || defaultColor,
            hasChangedName: !!customUsername,
            createdAt: new Date().toISOString()
        };
        localStorage.setItem('riprap_user', JSON.stringify(user));
    } else {
        user = JSON.parse(user);
        // Ensure color exists for existing users
        if (!user.color) {
            user.color = USERNAME_COLORS[0];
            localStorage.setItem('riprap_user', JSON.stringify(user));
        }
    }
    return user;
};

// Location settings persistence
const saveLocationSettings = (location, radius) => {
    const settings = {
        customLocation: location,
        locationRadius: radius,
        savedAt: new Date().toISOString()
    };
    localStorage.setItem('riprap_location_settings', JSON.stringify(settings));
};

const loadLocationSettings = () => {
    const settings = localStorage.getItem('riprap_location_settings');
    if (settings) {
        return JSON.parse(settings);
    }
    return { customLocation: null, locationRadius: 10 }; // Default values
};

// Calculate distance between two coordinates (Haversine formula)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
};

// Rate limiting configuration
const RATE_LIMITS = {
    POST_COOLDOWN: 30000, // 30 seconds between posts
    VOTE_COOLDOWN: 1000,  // 1 second between votes
    MAX_POSTS_PER_HOUR: 10,
    MAX_VOTES_PER_MINUTE: 30
};

// Rate limiting check
const checkRateLimit = (lastTime, cooldown, count, maxCount, timeWindow) => {
    const now = Date.now();
    const timeSinceLastAction = now - lastTime;
    
    if (timeSinceLastAction < cooldown) {
        return { allowed: false, remainingTime: Math.ceil((cooldown - timeSinceLastAction) / 1000) };
    }
    
    // Check count-based limits (simplified - in real app would track per time window)
    if (count >= maxCount) {
        return { allowed: false, remainingTime: Math.ceil(timeWindow / 1000) };
    }
    
    return { allowed: true, remainingTime: 0 };
};

// Auto-moderation - spam and inappropriate content filter
const BLOCKED_WORDS = [
    'spam', 'scam', 'fake', 'bot', 'hack', 'cheat', 'exploit',
    'idiot', 'stupid', 'hate', 'kill', 'die', 'suicide',
    'buy now', 'click here', 'make money', 'get rich', 'free money'
];

const SUSPICIOUS_PATTERNS = [
    /(.)\1{4,}/g, // Repeated characters (aaaaa)
    /[A-Z]{10,}/g, // Excessive caps
    /https?:\/\/[^\s]+/g, // URLs (could be spam)
    /\d{10,}/g, // Long numbers (phone numbers)
    /[!@#$%^&*]{3,}/g // Excessive special characters
];

const moderateContent = (content) => {
    const lowerContent = content.toLowerCase();
    const issues = [];
    
    // Check for blocked words
    const foundBlockedWords = BLOCKED_WORDS.filter(word => lowerContent.includes(word));
    if (foundBlockedWords.length > 0) {
        issues.push(`Contains inappropriate words: ${foundBlockedWords.join(', ')}`);
    }
    
    // Check for suspicious patterns
    SUSPICIOUS_PATTERNS.forEach(pattern => {
        if (pattern.test(content)) {
            issues.push('Contains suspicious patterns');
        }
    });
    
    // Check length
    if (content.length < 3) {
        issues.push('Content too short');
    }
    
    // Check for excessive repetition
    const words = content.split(/\s+/);
    const wordCounts = {};
    words.forEach(word => {
        const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
        if (cleanWord.length > 2) {
            wordCounts[cleanWord] = (wordCounts[cleanWord] || 0) + 1;
        }
    });
    
    const maxRepeats = Math.max(...Object.values(wordCounts));
    if (maxRepeats > 3) {
        issues.push('Excessive word repetition detected');
    }
    
    return {
        allowed: issues.length === 0,
        issues: issues,
        severity: issues.length > 2 ? 'high' : issues.length > 0 ? 'medium' : 'low'
    };
};





// Get approximate location name from coordinates
const getApproximateLocation = (lat, lng) => {
    // Find the closest major city for general area identification
    let closestLocation = null;
    let closestDistance = Infinity;
    
    Object.entries(STRIPED_BASS_LOCATIONS).forEach(([key, location]) => {
        const distance = calculateDistance(lat, lng, location.lat, location.lng);
        if (distance < closestDistance) {
            closestDistance = distance;
            closestLocation = location;
        }
    });
    
    if (!closestLocation) return 'Unknown Area';
    
    // If very close to a major city (within 25 miles), use the city name
    if (closestDistance <= 25) {
        return closestLocation.name;
    } else {
        return `${Math.round(closestDistance)} miles from ${closestLocation.name}`;
    }
};

// Get nearest city/state for post display (more precise than approximate location)
const getNearestCityState = (lat, lng) => {
    // First try to find in US_CITIES database
    let closestCity = null;
    let closestDistance = Infinity;
    
    US_CITIES.forEach(city => {
        const distance = calculateDistance(lat, lng, city.lat, city.lng);
        if (distance < closestDistance) {
            closestDistance = distance;
            closestCity = city;
        }
    });
    
    if (closestCity && closestDistance <= 50) { // Within 50 miles
        return `${closestCity.name}, ${closestCity.state}`;
    }
    
    // Fallback to fishing locations
    let closestLocation = null;
    closestDistance = Infinity;
    
    Object.entries(STRIPED_BASS_LOCATIONS).forEach(([key, location]) => {
        const distance = calculateDistance(lat, lng, location.lat, location.lng);
        if (distance < closestDistance) {
            closestDistance = distance;
            closestLocation = location;
        }
    });
    
    if (closestLocation) {
        return closestLocation.name;
    }
    
    return 'Unknown Location';
};

// ASCII Art for fishing
const FISHING_ASCII = `
    o                 o
     \\               /
      \\             /
  ~~~~~~\\~~~~~~~~~~~/~~~~~~
         \\         /
          \\       /
           \\     /
            \\   /
             \\_/
              |
         ____/ \\____
        /           \\
       |   RIPRAP   |
        \\___________/
`;

// Username Setup Component
const UsernameSetup = ({ onUsernameSet }) => {
    const [username, setUsername] = useState(generateScreenName());
    const [selectedColor, setSelectedColor] = useState(USERNAME_COLORS[0]);

    const handleContinue = () => {
        if (username.trim().length < 3) {
            alert('Username must be at least 3 characters');
            return;
        }
        if (username.trim().length > 20) {
            alert('Username must be 20 characters or less');
            return;
        }
        onUsernameSet(username.trim().toUpperCase(), selectedColor);
    };

    const generateNew = () => {
        setUsername(generateScreenName());
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 terminal-text">
            <div className="w-full max-w-md mx-auto terminal-card p-6">
                <div className="text-center space-y-4">
                    <div className="ascii-art text-xs terminal-accent">{FISHING_ASCII}</div>
                    <div className="text-xl font-bold terminal-text">
                        Welcome to RipRap
                    </div>
                    <div className="text-sm terminal-text">
                        Choose your angler name to get started
                    </div>
                </div>
                
                <div className="space-y-4 mt-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold terminal-text block">
                            Your angler name:
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value.toUpperCase())}
                            placeholder="Enter username"
                            className="w-full h-10 px-3 py-2 terminal-input text-sm font-mono focus:outline-none focus:ring-2 focus:ring-navy-700"
                            maxLength={20}
                        />
                        <div className="text-xs terminal-accent">
                            {username.length}/20 characters
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold terminal-text block">
                            Choose your color:
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                            {USERNAME_COLORS.map((color) => (
                                <button
                                    key={color.name}
                                    onClick={() => setSelectedColor(color)}
                                    className={`h-10 rounded border-2 ${
                                        selectedColor.name === color.name 
                                            ? 'border-navy-700 ring-2 ring-navy-300' 
                                            : 'border-gray-300 hover:border-gray-400'
                                    } focus:outline-none focus:ring-2 focus:ring-navy-700`}
                                    style={{ backgroundColor: color.value }}
                                    title={color.name}
                                />
                            ))}
                        </div>
                        <div className="text-xs terminal-accent">
                            Preview: <span className={selectedColor.textClass} style={{ fontWeight: 'bold' }}>{username}</span>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 p-3 text-xs terminal-text">
                        ⚠️ <strong>Note:</strong> You cannot change your username or color after creating your account. Choose carefully!
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <button 
                            onClick={generateNew}
                            className="h-10 px-3 py-2 terminal-button text-sm font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700"
                        >
                            Generate New
                        </button>
                        <button 
                            onClick={handleContinue}
                            disabled={!username.trim() || username.trim().length < 3}
                            className="h-10 px-3 py-2 terminal-button text-sm font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700 disabled:terminal-button:disabled"
                        >
                            Start Fishing
                        </button>
                    </div>

                    <div className="text-center text-xs terminal-text mt-4 space-y-1">
                        <div>• Anonymous fishing community</div>
                        <div>• Location-based posts</div>
                        <div>• Share catches, spots, and tips</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Account Modal Component  
const AccountModal = ({ isOpen, onClose, user, userStats }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="w-full max-w-md terminal-card p-6 max-h-[80vh] overflow-y-auto">
                <div className="text-center mb-4">
                    <div className="text-lg font-bold terminal-text">
                        My Account
                    </div>
                    <div className="text-xs terminal-accent mt-1">
                        Device-based account
                    </div>
                </div>
                
                <div className="space-y-4">
                    {/* User Info */}
                    <div className="bg-navy-50 p-4 rounded border">
                        <div className="text-center">
                            <div className="text-lg font-bold" style={{ color: user?.color?.value || '#1e3a8a' }}>
                                {user?.screenName}
                            </div>
                            <div className="text-xs terminal-accent mt-1">
                                Angler since {new Date(user?.createdAt || Date.now()).toLocaleDateString()}
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 p-3 rounded text-center">
                            <div className="text-lg font-bold terminal-text">{userStats.posts.length}</div>
                            <div className="text-xs terminal-accent">Posts</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded text-center">
                            <div className="text-lg font-bold terminal-text">{userStats.comments.length}</div>
                            <div className="text-xs terminal-accent">Comments</div>
                        </div>
                    </div>

                    {/* Recent Posts */}
                    <div className="space-y-2">
                        <div className="text-sm font-bold terminal-text">Recent Posts</div>
                        <div className="max-h-40 overflow-y-auto space-y-2">
                            {userStats.posts.slice(0, 5).map((post, index) => (
                                <div key={index} className="bg-gray-50 p-2 rounded text-xs">
                                    <div className="font-mono">{post.content}</div>
                                    <div className="text-gray-500 mt-1">
                                        ▲ {post.upvotes || 0} ▼ {post.downvotes || 0}
                                    </div>
                                </div>
                            ))}
                            {userStats.posts.length === 0 && (
                                <div className="text-xs terminal-accent text-center py-4">
                                    No posts yet. Start sharing your catches!
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Device Persistence Info */}
                    <div className="bg-yellow-50 border border-yellow-200 p-3 text-xs">
                        <div className="font-bold text-yellow-800 mb-2">Account Persistence</div>
                        <div className="text-yellow-700 space-y-1">
                            <div>• Account saved to this device</div>
                            <div>• Clear cache = lose account</div>
                            <div>• Different device = new account</div>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button 
                            onClick={onClose}
                            className="w-full h-10 px-3 py-2 border-2 border-navy-700 bg-white text-navy-700 text-sm font-bold hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Location Selection Modal Component
const LocationSelectionModal = ({ isOpen, onClose, onLocationSet, currentLocation }) => {
    const [cityInput, setCityInput] = useState('');
    const [selectedPreset, setSelectedPreset] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    if (!isOpen) return null;

    // Handle city input change with autocomplete
    const handleCityInputChange = (value) => {
        setCityInput(value);
        if (value.length >= 1) {
            const results = searchCities(value);
            setSearchResults(results);
            setShowSuggestions(results.length > 0);
        } else {
            setSearchResults([]);
            setShowSuggestions(false);
        }
    };

    // Handle city selection from autocomplete
    const handleCitySelect = (city) => {
        setCityInput(`${city.name}, ${city.state}`);
        setSearchResults([]);
        setShowSuggestions(false);
        onLocationSet({
            lat: city.lat,
            lng: city.lng,
            name: `${city.name}, ${city.state}`
        });
        onClose();
    };

    // Handle manual city input submission with API fallback
    const handleCitySubmit = async () => {
        if (!cityInput.trim()) {
            alert('Please enter a city name');
            return;
        }

        setIsLoading(true);

        // First try to find exact match in our database
        const exactMatch = US_CITIES.find(city => 
            `${city.name}, ${city.state}`.toLowerCase() === cityInput.toLowerCase() ||
            city.name.toLowerCase() === cityInput.toLowerCase()
        );

        if (exactMatch) {
            onLocationSet({
                lat: exactMatch.lat,
                lng: exactMatch.lng,
                name: `${exactMatch.name}, ${exactMatch.state}`
            });
            onClose();
            setIsLoading(false);
            return;
        }

        // If no exact match, try fuzzy search in our database
        const fuzzyResults = searchCities(cityInput);
        if (fuzzyResults.length > 0 && fuzzyResults[0].score > 50) {
            const bestMatch = fuzzyResults[0];
            onLocationSet({
                lat: bestMatch.lat,
                lng: bestMatch.lng,
                name: `${bestMatch.name}, ${bestMatch.state}`
            });
            onClose();
            setIsLoading(false);
            return;
        }

        // Finally, try external geocoding API
        try {
            const apiResults = await geocodeWithAPI(cityInput);
            if (apiResults.length > 0) {
                const result = apiResults[0];
                onLocationSet({
                    lat: result.lat,
                    lng: result.lng,
                    name: `${result.name}, ${result.state}`
                });
                onClose();
                setIsLoading(false);
                return;
            }
        } catch (error) {
            console.error('API geocoding failed:', error);
        }

        setIsLoading(false);
        alert('City not found. Please check spelling or select from autocomplete suggestions.');
    };

    const stripedBassLocations = [
        { id: 'current', name: 'Use Current Location', coords: null },
        ...Object.entries(STRIPED_BASS_LOCATIONS).map(([key, location]) => ({
            id: key,
            name: location.name,
            coords: location
        }))
    ];



    const handlePresetSelect = (location) => {
        if (location.id === 'current') {
            onLocationSet(null); // null means use current GPS location
        } else {
            onLocationSet(location.coords);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="w-full max-w-md terminal-card p-6">
                <div className="text-center mb-4">
                    <div className="text-lg font-bold terminal-text">
                        Set Location
                    </div>
                    <div className="text-xs terminal-accent mt-1">
                        Choose where to view fishing posts
                    </div>
                </div>
                
                <div className="space-y-4">
                    <div className="text-center text-xs terminal-accent">Select a location:</div>

                    {/* City/State Input with Autocomplete */}
                    <div className="space-y-2 relative">
                        <label className="text-sm font-bold terminal-text block">
                            Enter City, State:
                        </label>
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={cityInput}
                                onChange={(e) => handleCityInputChange(e.target.value)}
                                placeholder="Boston, MA"
                                className="flex-1 h-10 px-3 py-2 terminal-input text-sm focus:outline-none focus:ring-2 focus:ring-navy-700"
                                                            onFocus={() => cityInput.length >= 1 && setShowSuggestions(searchResults.length > 0)}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                onKeyPress={(e) => e.key === 'Enter' && handleCitySubmit()}
                            />
                            <button 
                                onClick={handleCitySubmit}
                                disabled={!cityInput.trim() || isLoading}
                                className="px-4 py-2 terminal-button text-sm font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700 disabled:opacity-50"
                            >
                                {isLoading ? '...' : 'Set'}
                            </button>
                        </div>
                        
                        {/* Autocomplete Suggestions */}
                        {showSuggestions && searchResults.length > 0 && (
                            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
                                {searchResults.map((city, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleCitySelect(city)}
                                        className="w-full text-left px-3 py-2 text-sm hover:bg-navy-50 border-b border-gray-100 last:border-b-0"
                                    >
                                        {city.name}, {city.state}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="text-center text-xs terminal-accent">or choose a fishing hotspot:</div>

                    {/* Striped Bass Fishing Locations */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold terminal-text block">
                            Northeast Striped Bass Locations:
                        </label>
                        <div className="space-y-1 max-h-40 overflow-y-auto">
                            {stripedBassLocations.map((location) => (
                                <button
                                    key={location.id}
                                    onClick={() => handlePresetSelect(location)}
                                    className="w-full text-left px-3 py-2 text-sm hover:bg-navy-50 border border-gray-300 hover:border-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-700"
                                >
                                    {location.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="pt-2">
                        <button 
                            onClick={onClose}
                            className="w-full h-10 px-3 py-2 border-2 border-navy-700 bg-white text-navy-700 text-sm font-bold hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-700"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Post Creation Modal Component
const PostCreationModal = ({ isOpen, onClose, onSubmit, newPostContent, setNewPostContent, isOnline }) => {
    if (!isOpen) return null;

    const handleSubmit = () => {
        if (newPostContent.trim()) {
            onSubmit();
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="w-full max-w-md terminal-card p-6">
                
                <div className="space-y-4">
                    <div className="space-y-2">
                        <textarea
                            value={newPostContent}
                            onChange={(e) => setNewPostContent(e.target.value)}
                            placeholder="Post your weather and/or fishing reports, questions from the water, callouts of bad behavior..."
                            className="w-full h-24 px-3 py-2 terminal-input text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-navy-700"
                            maxLength={200}
                            autoFocus
                        />
                        <div className="text-xs terminal-accent">
                            {newPostContent.length}/200 characters
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <button 
                            onClick={onClose}
                            className="h-10 px-3 py-2 border-2 border-navy-700 bg-white text-navy-700 text-sm font-bold hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-700"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={handleSubmit}
                            disabled={!newPostContent.trim() || !isOnline}
                            className="h-10 px-3 py-2 terminal-button text-sm font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700 disabled:terminal-button:disabled"
                        >
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};



// Post Component with terminal styling
const Post = ({ post, onVote, onComment, onReport, userVotes, comments, showLocation = false }) => {
    const [showComments, setShowComments] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [isReported, setIsReported] = useState(false);
    
    const userVote = userVotes.find(vote => vote.postId === post.id);
    const postComments = comments.filter(comment => comment.postId === post.id);
    
    const handleVote = (voteType) => {
        onVote(post.id, voteType);
    };
    
    const handleComment = () => {
        if (commentText.trim() && commentText.length <= 200) {
            onComment(post.id, commentText.trim());
            setCommentText('');
        }
    };
    
    const handleReport = () => {
        onReport(post.id);
        setIsReported(true);
        setTimeout(() => setIsReported(false), 3000);
    };
    
    const getTimeAgo = (timestamp) => {
        const now = new Date();
        const postTime = new Date(timestamp);
        const diff = Math.floor((now - postTime) / 1000);
        
        if (diff < 60) return 'NOW';
        if (diff < 3600) return `${Math.floor(diff / 60)}M`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}H`;
        return `${Math.floor(diff / 86400)}D`;
    };
    
    // Hide posts with score <= -5
    if (post.score <= -5) {
        return null;
    }
    
    return (
        <div className="py-4 border-b border-gray-300 last:border-b-0">
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-navy-700 text-white flex items-center justify-center text-xs font-bold">
                    {post.author.charAt(0)}
                </div>
                    <div>
                        <div className="flex items-center space-x-2">
                            <div className="font-bold text-sm" style={{ color: post.authorColor?.value || '#1e3a8a' }}>
                                {post.author}
                            </div>
                        </div>
                        <div className="text-xs terminal-accent">
                            {showLocation && post.location.name ? (
                                <>📍 {post.location.name}</>
                            ) : post.location.nearestCity ? (
                                <>📍 {post.location.nearestCity}</>
                            ) : (
                                <>{post.location.distance}mi away</>
                            )}
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleReport}
                    className={`text-xs px-2 py-1 ${
                        isReported 
                            ? 'text-gray-500' 
                            : 'text-red-600 hover:text-red-700'
                    } focus:outline-none`}
                    disabled={isReported}
                >
                    {isReported ? '✓' : '🚩'}
                </button>
            </div>
            
            <div className="mb-3 p-3 bg-white border-2 border-navy-700">
                <div className="terminal-text text-sm font-mono">{post.content}</div>
            </div>
            
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => handleVote('up')}
                        className={`px-2 py-1 text-sm ${
                            userVote?.type === 'up' 
                                ? 'text-green-600 font-bold' 
                                : 'text-gray-600 hover:text-green-600'
                        } focus:outline-none`}
                    >
                        ▲ {post.upvotes}
                    </button>
                    
                    <button
                        onClick={() => handleVote('down')}
                        className={`px-2 py-1 text-sm ${
                            userVote?.type === 'down' 
                                ? 'text-red-600 font-bold' 
                                : 'text-gray-600 hover:text-red-600'
                        } focus:outline-none`}
                    >
                        ▼ {post.downvotes}
                    </button>
                    
                    <div className={`px-2 py-1 text-xs font-bold ${
                        post.score > 0 ? 'text-green-600' : 
                        post.score < 0 ? 'text-red-600' : 'text-gray-600'
                    }`}>
                        {post.score > 0 ? '+' : ''}{post.score}
                    </div>
                </div>
                
                <button
                    onClick={() => setShowComments(!showComments)}
                    className="px-2 py-1 text-sm text-gray-600 hover:text-navy-700 focus:outline-none"
                >
                    💬 {postComments.length}
                </button>
            </div>
            
            {showComments && (
                <div className="mt-4 space-y-3 border-t-2 border-navy-700 pt-4">
                    {postComments.map(comment => (
                        <div key={comment.id} className="bg-gray-100 border-2 border-navy-700 p-2">
                            <div className="flex items-center space-x-2 mb-1">
                                <div className="w-4 h-4 bg-navy-700 text-white flex items-center justify-center text-xs font-bold">
                                    {comment.author.charAt(0)}
                                </div>
                                <span className="font-bold text-xs" style={{ color: comment.authorColor?.value || '#1e3a8a' }}>
                                    {comment.author}
                                </span>
                                <span className="text-xs terminal-accent">{getTimeAgo(comment.timestamp)}</span>
                            </div>
                            <div className="terminal-text text-xs font-mono pl-6">{comment.content}</div>
                        </div>
                    ))}
                    
                    <div className="flex space-x-2">
                        <textarea
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder="Add a comment..."
                            className="flex-1 h-16 px-2 py-1 terminal-input text-xs font-mono focus:outline-none focus:ring-2 focus:ring-navy-700 resize-none"
                            maxLength={200}
                        />
                        <button
                            onClick={handleComment}
                            disabled={!commentText.trim()}
                            className="px-3 py-1 terminal-button text-xs font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700 disabled:terminal-button:disabled"
                        >
                            Send
                        </button>
                    </div>
                    <div className="text-xs terminal-accent">
                        {commentText.length}/200 characters
                    </div>
                </div>
            )}
        </div>
    );
};

// Main App Component
const App = () => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [userVotes, setUserVotes] = useState([]);
    const [newPostContent, setNewPostContent] = useState('');
    const [user, setUser] = useState(null);
    const [userLocation, setUserLocation] = useState(null);

    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [db, setDb] = useState(null);
    const [showUsernameSetup, setShowUsernameSetup] = useState(false);

    const [sortBy, setSortBy] = useState('hot'); // 'hot', 'new', or 'coastwide'
    const [currentLocationName, setCurrentLocationName] = useState('');
    const [showPostModal, setShowPostModal] = useState(false);
    const [showLocationModal, setShowLocationModal] = useState(false);

    const [customLocation, setCustomLocation] = useState(null);
    const [showAccountModal, setShowAccountModal] = useState(false);
    const [locationRadius, setLocationRadius] = useState(10);
    const [userStats, setUserStats] = useState({ posts: [], comments: [] });
    
    // Real-time updates
    const [lastUpdateCheck, setLastUpdateCheck] = useState(Date.now());
    const eventSourceRef = useRef(null);
    
    // Rate limiting
    const [lastPostTime, setLastPostTime] = useState(0);
    const [lastVoteTime, setLastVoteTime] = useState(0);
    const [postCount, setPostCount] = useState(0);
    const [voteCount, setVoteCount] = useState(0);
    
    // Lazy loading
    const [loadedPostsCount, setLoadedPostsCount] = useState(20); // Start with 20 posts
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    
    const textareaRef = useRef(null);
    
    // Check if user needs to set up username and load location settings
    useEffect(() => {
        const userData = localStorage.getItem('riprap_user');
        if (!userData) {
            setShowUsernameSetup(true);
        } else {
            setUser(JSON.parse(userData));
        }
        
        // Load saved location settings
        const locationSettings = loadLocationSettings();
        setLocationRadius(locationSettings.locationRadius);
        if (locationSettings.customLocation) {
            setCustomLocation(locationSettings.customLocation);
            setCurrentLocationName(locationSettings.customLocation.name);
        }
    }, []);
    
    // Initialize app
    useEffect(() => {
        if (!user) return;
        
        const initApp = async () => {
            // Initialize database
            try {
                const database = await initDB();
                setDb(database);
                await loadData(database, user.id);
                
            } catch (error) {
                console.error('Failed to initialize database:', error);
            }
            
            // Get user location - only use GPS if no saved custom location
            const savedSettings = loadLocationSettings();
            if (savedSettings.customLocation) {
                // Use saved custom location
                setUserLocation(savedSettings.customLocation);
                setCurrentLocationName(savedSettings.customLocation.name);
                console.log('Using saved custom location:', savedSettings.customLocation);
            } else {
                // No saved location, try GPS
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const lat = position.coords.latitude;
                            const lng = position.coords.longitude;
                            setUserLocation({ lat, lng });
                            setCurrentLocationName(getApproximateLocation(lat, lng));
                            console.log('GPS location acquired:', { lat, lng });
                        },
                        (error) => {
                            console.error('GPS location failed:', error.message);
                            // Fallback to a default location (Cape Cod) if GPS fails
                            const fallbackLocation = STRIPED_BASS_LOCATIONS['cape-cod-ma'];
                            setUserLocation(fallbackLocation);
                            setCurrentLocationName(`${fallbackLocation.name} (Default)`);
                        },
                        {
                            enableHighAccuracy: true,
                            timeout: 10000,
                            maximumAge: 300000 // 5 minutes cache
                        }
                    );
                } else {
                    console.warn('Geolocation not supported');
                    // Fallback to a default location
                    const fallbackLocation = STRIPED_BASS_LOCATIONS['cape-cod-ma'];
                    setUserLocation(fallbackLocation);
                    setCurrentLocationName(`${fallbackLocation.name} (Default)`);
                }
            }
        };
        
        initApp();
        
        // Online/offline status
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);
        
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, [user]);

    // Recalculate user stats when data changes
    useEffect(() => {
        if (user && posts && comments) {
            calculateUserStats();
        }
    }, [posts, comments, user, userVotes]);

    // Save location radius when it changes
    useEffect(() => {
        if (locationRadius !== 10) { // Only save if different from default
            saveLocationSettings(customLocation, locationRadius);
        }
    }, [locationRadius, customLocation]);
    
    // Infinite scroll for lazy loading
    useEffect(() => {
        const handleScroll = () => {
            if (sortBy === 'coastwide') return; // No infinite scroll for coastwide
            
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = window.innerHeight;
            
            if (scrollTop + clientHeight >= scrollHeight - 1000 && !isLoadingMore) {
                setIsLoadingMore(true);
                setTimeout(() => {
                    setLoadedPostsCount(prev => prev + 10);
                    setIsLoadingMore(false);
                }, 500); // Simulate loading delay
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sortBy, isLoadingMore]);
    
    // Reset loaded posts count when sort changes
    useEffect(() => {
        setLoadedPostsCount(20);
    }, [sortBy]);
    
    // Handle username setup
    const handleUsernameSet = (username, color) => {
        const userData = getUserIdentity(username, color);
        setUser(userData);
        setShowUsernameSetup(false);
    };



    // Calculate user statistics
    const calculateUserStats = () => {
        if (!user || !posts || !comments) return;
        
        const userPosts = posts.filter(post => post.authorId === user.id);
        const userComments = comments.filter(comment => comment.authorId === user.id);
        
        setUserStats({ posts: userPosts, comments: userComments });
    };
    
    // Handle location change
    const handleLocationSet = async (newLocation) => {
        if (!newLocation) {
            // Use current GPS location
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const coords = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        setUserLocation(coords);
                        setCustomLocation(null);
                        const locationName = getApproximateLocation(coords.lat, coords.lng);
                        setCurrentLocationName(locationName);
                        // Save settings (null custom location means use GPS)
                        saveLocationSettings(null, locationRadius);
                    },
                    () => {
                        console.error('Failed to get current location');
                        setCustomLocation(null);
                    }
                );
            }
        } else {
            // Use custom location
            setUserLocation(newLocation);
            setCustomLocation(newLocation);
            setCurrentLocationName(newLocation.name);
            // Save settings
            saveLocationSettings(newLocation, locationRadius);
        }
    };


    
    // Load data from IndexedDB
    const loadData = async (database, userId) => {
        try {
            const transaction = database.transaction(['posts', 'comments', 'votes'], 'readonly');
            
            // Load posts
            const postsRequest = transaction.objectStore('posts').getAll();
            const postsResult = await new Promise((resolve, reject) => {
                postsRequest.onsuccess = () => resolve(postsRequest.result);
                postsRequest.onerror = () => reject(postsRequest.error);
            });
            
            // Load comments
            const commentsRequest = transaction.objectStore('comments').getAll();
            const commentsResult = await new Promise((resolve, reject) => {
                commentsRequest.onsuccess = () => resolve(commentsRequest.result);
                commentsRequest.onerror = () => reject(commentsRequest.error);
            });
            
            // Load user votes
            const votesRequest = transaction.objectStore('votes').index('userId').getAll(userId);
            const votesResult = await new Promise((resolve, reject) => {
                votesRequest.onsuccess = () => resolve(votesRequest.result);
                votesRequest.onerror = () => reject(votesRequest.error);
            });
            
            setPosts(postsResult || []);
            setComments(commentsResult || []);
            setUserVotes(votesResult || []);
        } catch (error) {
            console.error('Failed to load data:', error);
        }
    };
    
    // Filter and sort posts by location and criteria
    const getFilteredPosts = () => {
        if (sortBy === 'coastwide') {
            // Coastwide: Return top 3 posts from across the East Coast with location info
            const allPostsWithDistance = posts.map(post => ({
                ...post,
                location: {
                    ...post.location,
                    distance: userLocation ? Math.round(calculateDistance(
                        userLocation.lat, userLocation.lng, 
                        post.location.lat, post.location.lng
                    ) * 10) / 10 : 0,
                    // Ensure nearestCity is available for coastwide display
                    nearestCity: post.location.nearestCity || getNearestCityState(post.location.lat, post.location.lng),
                    name: post.location.nearestCity || getNearestCityState(post.location.lat, post.location.lng)
                }
            }));
            
            // Sort by hot score and take top 3
            const topPosts = allPostsWithDistance
                .filter(post => {
                    // Only include East Coast posts (rough longitude filter)
                    return post.location.lng > -82 && post.location.lng < -66;
                })
                .sort((a, b) => {
                    const aComments = comments.filter(c => c.postId === a.id).length;
                    const bComments = comments.filter(c => c.postId === b.id).length;
                    const aAge = (Date.now() - new Date(a.timestamp)) / (1000 * 60 * 60);
                    const bAge = (Date.now() - new Date(b.timestamp)) / (1000 * 60 * 60);
                    
                    const aHotScore = a.score + aComments * 3 - aAge * 0.05; // Slightly different weights for coastwide
                    const bHotScore = b.score + bComments * 3 - bAge * 0.05;
                    
                    return bHotScore - aHotScore;
                })
                .slice(0, 3);
            
            return topPosts;
        }
        
        if (!userLocation) return posts.slice(0, loadedPostsCount);
        
        // Use custom location if set, otherwise use GPS location
        const effectiveLocation = customLocation || userLocation;
        
        let filteredPosts = posts.filter(post => {
            if (post.location.lat && post.location.lng) {
                const distance = calculateDistance(
                    effectiveLocation.lat, effectiveLocation.lng,
                    post.location.lat, post.location.lng
                );
                return distance <= locationRadius;
            }
            return true;
        });
        
        // Add distance calculation and ensure nearestCity
        filteredPosts = filteredPosts.map(post => ({
            ...post,
            location: {
                ...post.location,
                distance: Math.round(calculateDistance(effectiveLocation?.lat || 0, effectiveLocation?.lng || 0, post.location.lat, post.location.lng) * 10) / 10,
                nearestCity: post.location.nearestCity || getNearestCityState(post.location.lat, post.location.lng)
            }
        }));
        
        // Sort by criteria
        if (sortBy === 'hot') {
            // Hot algorithm: score + comment count + recency factor
            filteredPosts.sort((a, b) => {
                const aComments = comments.filter(c => c.postId === a.id).length;
                const bComments = comments.filter(c => c.postId === b.id).length;
                const aAge = (Date.now() - new Date(a.timestamp)) / (1000 * 60 * 60); // hours
                const bAge = (Date.now() - new Date(b.timestamp)) / (1000 * 60 * 60); // hours
                
                const aHotScore = a.score + aComments * 2 - aAge * 0.1;
                const bHotScore = b.score + bComments * 2 - bAge * 0.1;
                
                return bHotScore - aHotScore;
            });
        } else {
            // New: sort by timestamp
            filteredPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        }
        
        // Apply lazy loading limit
        return filteredPosts.slice(0, loadedPostsCount);
    };
    
    // Create new post
    const handleCreatePost = async () => {
        if (!newPostContent.trim() || !db || !user || !userLocation) return;
        
        // Rate limiting check
        const rateLimitCheck = checkRateLimit(
            lastPostTime, 
            RATE_LIMITS.POST_COOLDOWN, 
            postCount, 
            RATE_LIMITS.MAX_POSTS_PER_HOUR,
            3600000 // 1 hour
        );
        
        if (!rateLimitCheck.allowed) {
            alert(`Please wait ${rateLimitCheck.remainingTime} seconds before posting again.`);
            return;
        }
        
        // Content moderation check
        const moderationResult = moderateContent(newPostContent.trim());
        if (!moderationResult.allowed) {
            alert(`Post blocked: ${moderationResult.issues.join(', ')}`);
            return;
        }
        
        const newPost = {
            content: newPostContent.trim(),
            author: user.screenName,
            authorId: user.id,
            authorColor: user.color,
            timestamp: new Date().toISOString(),
            upvotes: 0,
            downvotes: 0,
            score: 0,
            location: {
                lat: userLocation.lat,
                lng: userLocation.lng,
                distance: 0,
                nearestCity: getNearestCityState(userLocation.lat, userLocation.lng)
            }
        };
        
        try {
            const transaction = db.transaction(['posts'], 'readwrite');
            const store = transaction.objectStore('posts');
            await new Promise((resolve, reject) => {
                const request = store.add(newPost);
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
            });
            
            await loadData(db, user.id);
            setNewPostContent('');
            
            // Update rate limiting counters
            setLastPostTime(Date.now());
            setPostCount(prev => prev + 1);
        } catch (error) {
            console.error('Failed to create post:', error);
        }
    };
    
    // Handle voting
    const handleVote = async (postId, voteType) => {
        if (!db || !user) return;
        
        // Rate limiting check
        const rateLimitCheck = checkRateLimit(
            lastVoteTime, 
            RATE_LIMITS.VOTE_COOLDOWN, 
            voteCount, 
            RATE_LIMITS.MAX_VOTES_PER_MINUTE,
            60000 // 1 minute
        );
        
        if (!rateLimitCheck.allowed) {
            console.log(`Vote rate limited: ${rateLimitCheck.remainingTime}s remaining`);
            return;
        }
        
        try {
            const transaction = db.transaction(['posts', 'votes'], 'readwrite');
            const postsStore = transaction.objectStore('posts');
            const votesStore = transaction.objectStore('votes');
            
            // Get current post
            const postRequest = postsStore.get(postId);
            const post = await new Promise((resolve, reject) => {
                postRequest.onsuccess = () => resolve(postRequest.result);
                postRequest.onerror = () => reject(postRequest.error);
            });
            
            // Check for existing vote
            const existingVoteRequest = votesStore.index('postId').getAll(postId);
            const existingVotes = await new Promise((resolve, reject) => {
                existingVoteRequest.onsuccess = () => resolve(existingVoteRequest.result);
                existingVoteRequest.onerror = () => reject(existingVoteRequest.error);
            });
            
            const userVote = existingVotes.find(vote => vote.userId === user.id);
            
            if (userVote) {
                if (userVote.type === voteType) {
                    // Remove vote if same type
                    await new Promise((resolve, reject) => {
                        const deleteRequest = votesStore.delete(userVote.id);
                        deleteRequest.onsuccess = () => resolve();
                        deleteRequest.onerror = () => reject(deleteRequest.error);
                    });
                    
                    if (voteType === 'up') {
                        post.upvotes = Math.max(0, post.upvotes - 1);
                    } else {
                        post.downvotes = Math.max(0, post.downvotes - 1);
                    }
                } else {
                    // Change vote type
                    userVote.type = voteType;
                    await new Promise((resolve, reject) => {
                        const updateRequest = votesStore.put(userVote);
                        updateRequest.onsuccess = () => resolve();
                        updateRequest.onerror = () => reject(updateRequest.error);
                    });
                    
                    if (voteType === 'up') {
                        post.upvotes += 1;
                        post.downvotes = Math.max(0, post.downvotes - 1);
                    } else {
                        post.downvotes += 1;
                        post.upvotes = Math.max(0, post.upvotes - 1);
                    }
                }
            } else {
                // Add new vote
                const newVote = {
                    postId: postId,
                    userId: user.id,
                    type: voteType,
                    timestamp: new Date().toISOString()
                };
                
                await new Promise((resolve, reject) => {
                    const addRequest = votesStore.add(newVote);
                    addRequest.onsuccess = () => resolve();
                    addRequest.onerror = () => reject(addRequest.error);
                });
                
                if (voteType === 'up') {
                    post.upvotes += 1;
                } else {
                    post.downvotes += 1;
                }
            }
            
            // Update score
            post.score = post.upvotes - post.downvotes;
            
            // Update post in database
            await new Promise((resolve, reject) => {
                const updateRequest = postsStore.put(post);
                updateRequest.onsuccess = () => resolve();
                updateRequest.onerror = () => reject(updateRequest.error);
            });
            
            await loadData(db, user.id);
            
            // Update rate limiting counters
            setLastVoteTime(Date.now());
            setVoteCount(prev => prev + 1);
        } catch (error) {
            console.error('Failed to vote:', error);
        }
    };
    
    // Handle commenting
    const handleComment = async (postId, content) => {
        if (!db || !user) return;
        
        const newComment = {
            postId: postId,
            content: content,
            author: user.screenName,
            authorId: user.id,
            authorColor: user.color,
            timestamp: new Date().toISOString()
        };
        
        try {
            const transaction = db.transaction(['comments'], 'readwrite');
            const store = transaction.objectStore('comments');
            await new Promise((resolve, reject) => {
                const request = store.add(newComment);
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
            });
            
            await loadData(db, user.id);
        } catch (error) {
            console.error('Failed to comment:', error);
        }
    };
    
    // Handle reporting
    const handleReport = (postId) => {
        console.log('Post reported:', postId);
        // In a real app, this would send to moderation
    };
    
    const filteredPosts = getFilteredPosts();
    
    // Show username setup screen if needed
    if (showUsernameSetup) {
        return <UsernameSetup onUsernameSet={handleUsernameSet} />;
    }
    
    return (
        <div className="min-h-screen bg-gray-50 terminal-text overflow-x-hidden">
            {/* Account Modal */}
            <AccountModal
                isOpen={showAccountModal}
                onClose={() => setShowAccountModal(false)}
                user={user}
                userStats={userStats}
            />

            {/* Location Selection Modal */}
            <LocationSelectionModal
                isOpen={showLocationModal}
                onClose={() => setShowLocationModal(false)}
                onLocationSet={handleLocationSet}
                currentLocation={userLocation}
            />

            {/* Post Creation Modal */}
            <PostCreationModal
                isOpen={showPostModal}
                onClose={() => setShowPostModal(false)}
                onSubmit={handleCreatePost}
                newPostContent={newPostContent}
                setNewPostContent={setNewPostContent}
                isOnline={isOnline}
            />



            {/* Floating Action Button */}
            <button
                onClick={() => setShowPostModal(true)}
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-navy-700 text-white rounded-full shadow-lg hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-300 flex items-center justify-center text-xl sm:text-2xl z-40"
                style={{ maxWidth: 'calc(100vw - 2rem)' }}
                title="Create new post"
            >
                +
            </button>
            
            <div className="max-w-2xl mx-auto px-2 sm:px-0">
                {/* Header */}
                <div className="terminal-header sticky top-0 z-40 p-3 sm:p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <svg width="40" height="40" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="192" height="192" rx="24" fill="#0f766e"/>
                                <g transform="translate(96, 96)" textAnchor="middle">
                                    <g transform="translate(-35, -15)">
                                        <path d="M2 -20 L2 15 M2 -20 L15 -20 Q22 -20 22 -10 Q22 0 15 0 L2 0 M15 0 L22 15" 
                                              stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle cx="30" cy="-25" r="1.5" fill="#ffffff"/>
                                        <path d="M30 -18 L30 15" stroke="#ffffff" strokeWidth="3" strokeLinecap="round"/>
                                        <path d="M40 -18 L40 22 M40 -18 L50 -18 Q58 -18 58 -5 Q58 8 50 8 L40 8" 
                                              stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <g transform="translate(10, 15)">
                                        <path d="M2 -20 L2 15 M2 -20 L15 -20 Q22 -20 22 -10 Q22 0 15 0 L2 0 M15 0 L22 15" 
                                              stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M30 -5 Q30 -15 38 -15 Q46 -15 46 -5 L46 15 M30 0 L46 0" 
                                              stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M56 -15 L56 22 M56 -15 L66 -15 Q74 -15 74 -2 Q74 11 66 11 L56 11" 
                                              stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <g opacity="0.7">
                                        <path d="M-70 45 Q-60 40 -50 45 Q-40 50 -30 45 Q-20 40 -10 45 Q0 50 10 45 Q20 40 30 45 Q40 50 50 45 Q60 40 70 45" 
                                              stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round"/>
                                        <g transform="translate(75, -35) scale(0.4)">
                                            <path d="M0 0 Q15 0 15 15 Q15 30 0 30 Q-15 30 -15 15 Q-15 5 -5 5" 
                                                  stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round"/>
                                            <path d="M-5 5 L-10 0" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <div className="hidden sm:block">
                                <div className="text-xs">Share the Shore, Spill the Lore</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                            <button
                                onClick={() => setShowAccountModal(true)}
                                className="flex items-center space-x-1 text-xs sm:text-sm font-bold px-3 py-2 bg-white border-2 border-navy-600 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-navy-300 shadow-sm"
                                style={{ color: user?.color?.value || '#1e3a8a' }}
                            >
                                <span>{user?.screenName}</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Location Info & Sort Categories */}
                <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                    {/* Location Display with Radius Slider */}
                    <div className="p-3 terminal-card">
                        <div className="space-y-3">
                            <button 
                                onClick={() => setShowLocationModal(true)}
                                className="w-full text-left hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-300 rounded p-2"
                            >
                                <div className="text-sm font-bold terminal-text mb-1">📍 Local Area:</div>
                                <div className="text-xs terminal-accent">
                                    {currentLocationName}
                                </div>
                                <div className="text-xs text-navy-600 mt-1">
                                    Click to change location
                                </div>
                            </button>
                            
                            {/* Radius Slider */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold terminal-text block">
                                    Search Radius: {locationRadius} miles
                                </label>
                                <input
                                    type="range"
                                    min="5"
                                    max="100"
                                    step="5"
                                    value={locationRadius}
                                    onChange={(e) => setLocationRadius(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-navy"
                                />
                                <div className="flex justify-between text-xs terminal-accent">
                                    <span>5 mi</span>
                                    <span>Show posts within {locationRadius} miles</span>
                                    <span>100 mi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Sort Categories */}
                    <div className="terminal-card p-3">
                        <div className="text-sm font-bold terminal-text mb-2">Sort by:</div>
                        <div className="grid grid-cols-3 gap-2">
                            <button
                                onClick={() => setSortBy('hot')}
                                className={`px-3 py-2 text-sm font-bold border-2 ${
                                    sortBy === 'hot' 
                                        ? 'terminal-button' 
                                        : 'border-navy-600 bg-white text-navy-600 hover:bg-navy-50'
                                } focus:outline-none focus:ring-2 focus:ring-navy-600`}
                            >
                                🔥 Hot
                            </button>
                            <button
                                onClick={() => setSortBy('new')}
                                className={`px-3 py-2 text-sm font-bold border-2 ${
                                    sortBy === 'new' 
                                        ? 'terminal-button' 
                                        : 'border-navy-600 bg-white text-navy-600 hover:bg-navy-50'
                                } focus:outline-none focus:ring-2 focus:ring-navy-600`}
                            >
                                ⭐ New
                            </button>
                            <button
                                onClick={() => setSortBy('coastwide')}
                                className={`px-3 py-2 text-sm font-bold border-2 ${
                                    sortBy === 'coastwide' 
                                        ? 'terminal-button' 
                                        : 'border-navy-600 bg-white text-navy-600 hover:bg-navy-50'
                                } focus:outline-none focus:ring-2 focus:ring-navy-600`}
                            >
                                🌊 Coastwide
                            </button>
                        </div>
                        {sortBy === 'coastwide' && (
                            <div className="text-xs terminal-accent mt-2">
                                Top 3 posts from across the East Coast
                            </div>
                        )}
                    </div>
                </div>
                

                
                {/* Posts Feed */}
                <div className="p-4">

                    
                    {filteredPosts.length === 0 ? (
                        <div className="p-8 text-center">
                            <div className="text-4xl mb-4">🎣</div>
                            <div className="text-sm font-bold terminal-text mb-2">
                                {sortBy === 'coastwide' ? 'No trending posts found' : 'No posts in your area'}
                            </div>
                            <div className="text-xs terminal-accent">
                                {sortBy === 'coastwide' 
                                    ? 'Check back later for trending discussions!' 
                                    : 'Be the first to share what\'s happening on the water!'
                                }
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Regular Posts */}
                            {filteredPosts.map((post, index) => (
                                <div key={post.id}>
                                    <Post
                                        post={post}
                                        onVote={handleVote}
                                        onComment={handleComment}
                                        onReport={handleReport}
                                        userVotes={userVotes}
                                        comments={comments}
                                        showLocation={sortBy === 'coastwide'}
                                    />
                                    {sortBy === 'coastwide' && index < filteredPosts.length - 1 && (
                                        <div className="border-t-2 border-navy-300 my-4"></div>
                                    )}
                                </div>
                            ))}
                            
                            {/* Loading indicator for infinite scroll */}
                            {isLoadingMore && sortBy !== 'coastwide' && (
                                <div className="text-center py-4">
                                    <div className="text-sm terminal-accent">Loading more posts...</div>
                                </div>
                            )}
                            
                            {/* End of posts indicator */}
                            {!isLoadingMore && sortBy !== 'coastwide' && filteredPosts.length >= loadedPostsCount && (
                                <div className="text-center py-4">
                                    <div className="text-xs terminal-accent">Scroll down for more posts</div>
                                </div>
                            )}
                        </>
                    )}
                </div>
                
                {/* Footer */}
                <div className="p-4 text-center text-xs terminal-accent bg-gray-100 border-t-2 border-navy-700">
                    <div>🎣 Tight lines and good catches!</div>
                    <div>Anonymous • Location-based • Fishing community</div>
                </div>
            </div>
        </div>
    );
};

export default App;